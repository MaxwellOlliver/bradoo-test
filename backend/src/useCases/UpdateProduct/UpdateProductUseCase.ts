import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IUpdateProductDTO } from "./UpdateProductDTO";

export class UpdateProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ){}

  async execute(data: IUpdateProductDTO): Promise<void> {
    const productExists = await this.productRepository.findById(data.id);

    if (!productExists) {
      throw new Error('Product does not exists');
    }
    
    if (productExists.code !== data.code) {
      const codeAvailable = await this.productRepository.findByCode(data.code, data.vendor_id);

      if (codeAvailable) {
        throw new Error(`Product with code ${data.code} already exists.`);
      }
    }

    const product = new Product({ ...data, vendor_id: productExists.vendor_id });

    await this.productRepository.update(product);
  }
}