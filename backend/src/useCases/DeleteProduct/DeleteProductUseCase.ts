import { IProductRepository } from "../../repositories/IProductRepository";
import { IDeleteProductDTO } from "./DeleteProductDTO";

export class DeleteProductUseCase {
  constructor(
    private productsRepository: IProductRepository
  ) {}

  async execute({ _id }: IDeleteProductDTO) {
    const productExists = await this.productsRepository.findById(_id);

    if (!productExists) {
      throw new Error("Product does not exists");
    }

    await this.productsRepository.delete(_id);
  }
}