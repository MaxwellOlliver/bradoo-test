import { Product as CProduct } from "../../entities/Product";
import Product from '../../models/Product';
import { IProductRepository } from "../IProductRepository";

export class MongoProductsRepository implements IProductRepository {
  async findByCode(code: string, vendor_id: string): Promise<CProduct> {
    const product: any = await Product.findOne({ where: { code, vendor_id } });

    return product;
  }

  async findById(id: string): Promise<CProduct> {
    const product: any = await Product.findByPk(id);

    return product;
  }

  async save(product: CProduct): Promise<CProduct> {
    const productDoc: any = await Product.create(product);

    return productDoc;
  }

  async update(product: CProduct) {
    await Product.update(product, { where: {
      id: product.id
    } });
  }

  async delete(id: string) {
    if (!id) {
      throw new Error('Product id not provided');
    }

    await Product.destroy({ where: { id } });
  }

  async list(vendor_id: string): Promise<any> {
    return await Product.findAll({ where: { vendor_id }});
  }
}