import { Request, Response } from "express";
import { CreateVendorUseCase } from "./CreateVendorUseCase";
import * as Yup from 'yup';
import { validate } from "../../utils/validateCnpj";

export class CreateVendorController {
  constructor(
    private createVendorUseCase: CreateVendorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      city: Yup.string().required(),
      products: Yup.array().required(),
    });

    try {
      await schema.validate(request.body)
    } catch (error) {
      return response.json({ error: error.errors.join('. ') })
    }

    const { name, cnpj, city, products } = request.body;
    
    if (!validate(cnpj)) {
      return response.status(400).json({ error: 'Invalid CNPJ.' })
    }

    try {
      const vendor = await this.createVendorUseCase.execute({ name, cnpj, city, products });

      return response.json(vendor);     
    } catch (error) {
      return response.status(400).json({ error: error.message || 'Unexpected error.' })
    }
  }
}