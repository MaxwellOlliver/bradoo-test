import { Request, Response } from "express";
import { DeleteVendorUseCase } from "./DeleteVendorUseCase";

export class DeleteVendorController {
  constructor(
    private deleteVendorUseCase: DeleteVendorUseCase
  ){}

  async handle(request: Request, response: Response) {
    const { vendorId: _id } = request.params;

    try {
      await this.deleteVendorUseCase.execute({ _id });

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: error.message || 'Unexpected error.' })
    }
  }
}