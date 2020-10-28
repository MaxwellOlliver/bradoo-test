import { Product } from "../../entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";
import { IListProductDTO } from "./ListProductsDTO";

export class ListProductsUseCase {
  constructor(
    private productsRepository: IProductRepository
  ){}

  async execute({ vendor_id }: IListProductDTO): Promise<Product[]> {
    return await this.productsRepository.list(vendor_id);
  }
}