import { Request, Response } from "express";
import { ListProductsUseCase } from "./ListProductsUseCase";

export class ListProductsController {
  constructor(
    private listProductsUseCase: ListProductsUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const { v: vendor_id } = request.query;

    if (!vendor_id) {
      return response.status(400).json({ error: 'vendor id not provided' });
    }

    if (Number.isNaN(Number(vendor_id))) {
      return response.status(400).json({ error: 'vendor id is not a valid. Only numbers are valid'});
    }

    const products = await this.listProductsUseCase.execute({ vendor_id: vendor_id as string });

    return response.json(products);
  }
}