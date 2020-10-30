import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";
import * as Yup from 'yup';

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase
  ){}

  async handle(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      vendor_id: Yup.string().required(),
      price: Yup.number().positive().required(),
      code: Yup.string().required(),
    });
    
    try {
      await schema.validate(request.body)
    } catch (error) {
      return response.json({ error: error.errors.join('. ') })
    }

    const { name, vendor_id, price, code } = request.body;

    try {
      const product = await this.createProductUseCase.execute({ name, vendor_id, price, code });

      return response.status(201).json(product);
    } catch (error) {
      return response.status(error.message === 'Product does not exists' ? 404 : 400)
      .json({ error: error.message || 'Unexpected error.' });
    }
  }
}