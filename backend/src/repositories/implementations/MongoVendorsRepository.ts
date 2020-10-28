import { Op } from "sequelize";
import { Vendor as CVendor } from "../../entities/Vendor";
import Vendor from '../../models/Vendor';
import { IVendorRepository } from "../IVendorRepository";
import { MongoProductsRepository } from "./MongoProductsRepository";

export class MongoVendorsRepository implements IVendorRepository {
  constructor(
    private productRepository?: MongoProductsRepository 
  ) {}
  async findByCNPJ(cnpj: string): Promise<CVendor> {
    const vendor: any = await Vendor.findOne({ where: { cnpj }});

    return vendor;
  }

  async findById(id: string): Promise<CVendor> {
    const vendor: any = await Vendor.findByPk(id);

    return vendor;
  }

  async save(vendor: CVendor): Promise<CVendor> {
    const vendorDoc: any = await Vendor.create(vendor);

    try {
      const products = await Promise.all(
        vendor.products.map(async (value) =>
          await this.productRepository.save({
            ...value,
            vendor_id: vendorDoc.id
          })
        )
      )
      
      return { ...vendorDoc.dataValues,  products };
    } catch (error) {
      await Vendor.destroy({ where: { id: vendorDoc.id } });

      throw new Error('Error on create product');
    }

  }

  async update(vendor: CVendor) {
    await Vendor.update(vendor, { where: { id: vendor.id } });
  }

  async delete(id: string) {
    if (!id) {
      throw new Error('Vendor id not provided');
    }

    await Vendor.destroy({ where: { id: id } });
  }

  async list(field: string, q?: string, page?: number): Promise<any> {
    let vendors: any;
    const fieldFilter = {
      name: {
        name: {
          [Op.iLike]: `${q}%`
        }
      },
      cnpj: {
        cnpj: {
          [Op.iLike]: `${q}%`
        }
      },
      city: {
        city: {
          [Op.iLike]: `${q}%`
        }
      },
      all: {
        [Op.or]: [
          { name: {
            [Op.iLike]: `${q}%`
          }},
          { cnpj: {
            [Op.iLike]: `${q}%`
          }},
          { city: {
            [Op.iLike]: `${q}%`
          }}
        ]
      }
    }

    if (q) {
      vendors = await Vendor.findAll({
        where: fieldFilter[field],
        limit: 20,
        offset: (page - 1) * 20,
      });
    } else {
      vendors = await Vendor.findAll({
        limit: 20,
        offset: (page - 1) * 20,
      });
    }

    const vendorsCount = q ? await Vendor.findAll({
      where: fieldFilter[field],
    }) : await Vendor.findAll();

    return { vendors, next: ((page - 1) * 20 + vendors.length) < vendorsCount.length }
  }
}