import { Request, Response } from "express";
import { ListVendorsUseCase } from "./ListVendorsUseCase";

export class ListVendorsController {
  constructor(
    private listVendorsUseCase: ListVendorsUseCase
  ) {}
  async handle(request: Request, response: Response) {
    const { q = null, page = 1, field = 'all' } = request.query; 
    const fields = {
      cnpj: 'cnpj',
      name: 'name',
      city: 'city',
      all: 'all',
    }

    if (!fields[field as string]) {
      return response.status(400).json({ error: 'Invalid field value. Expected: "cnpj", "name", "city" or "all".' })
    }
    const vendors = await this.listVendorsUseCase.execute({ q: q as string, page: page as number, field: field as string });

    return response.json(vendors);
  }
}