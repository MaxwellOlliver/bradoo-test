import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IVendorRepository } from "../../repositories/IVendorRepository";
import { ICreateProductDTO } from "./CreateProductDTO";

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
    private vendorRepository: IVendorRepository
  ){}

  async execute(data: ICreateProductDTO): Promise<Product> {
    const vendorExists = await this.vendorRepository.findById(data.vendor_id);

    if (!vendorExists) {
      throw new Error('Vendor does not exists');
    }

    const productAlreadyExists = await this.productRepository.findByCode(data.code, data.vendor_id);

    if (productAlreadyExists) {
      throw new Error('Product already exists');
    }

    const product = new Product(data);

    return await this.productRepository.save(product);
  }
}