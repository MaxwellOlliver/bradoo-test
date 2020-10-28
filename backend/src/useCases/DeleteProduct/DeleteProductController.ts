import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  constructor(
    private deleteProductUseCase: DeleteProductUseCase
  ){}

  async handle(request: Request, response: Response) {
    const { productId: _id } = request.params;

    try {
      await this.deleteProductUseCase.execute({ _id });

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: error.message || 'Unexpected error.' })
    }
  }
}