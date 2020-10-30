import { Request, Response } from "express";
import { UpdateVendorUseCase } from "./UpdateVendorUseCase";
import * as Yup from 'yup';
import { validate } from "../../utils/validateCnpj";

export class UpdateVendorController {
  constructor(
    private updateVendorUseCase: UpdateVendorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      city: Yup.string().required(),
    });

    try {
      await schema.validate(request.body)
    } catch (error) {
      return response.json({ error: error.errors.join('. ') })
    }

    const { name, cnpj, city } = request.body;
    const { vendorId: id } = request.params;

    if (!validate(cnpj)) {
      return response.status(400).json({ error: 'Invalid CNPJ.' })
    }

    try {
      await this.updateVendorUseCase.execute({ id, name, cnpj, city });

      return response.status(204).send();
    } catch (error) {
      return response.status(error.message === 'Vendor does not exists' ? 404 : 400)
        .json({ error: error.message || 'Unexpected error.' });
    }
  }
}