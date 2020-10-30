import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";
import * as Yup from 'yup';

export class UpdateProductController {
  constructor(
    private updateProductUseCase: UpdateProductUseCase
  ){}

  async handle(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().positive().required(),
      code: Yup.string().required(),
      vendor_id: Yup.string().required()
    });
    
    try {
      await schema.validate(request.body);
    } catch (error) {
      return response.json({ error: error.errors.join('. ') });
    }

    const { name, price, code, vendor_id } = request.body;
    const { productId: id } = request.params;
    console.log(id)

    try {
      await this.updateProductUseCase.execute({ id, name, price, code, vendor_id });

      return response.status(204).send();
    } catch (error) {
      return response.status(error.message === 'Product does not exists' ? 404 : 400)
      .json({ error: error.message || 'Unexpected error.' });
    }
  }
}