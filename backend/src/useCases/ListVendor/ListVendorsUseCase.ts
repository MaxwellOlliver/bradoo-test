import { IVendorRepository } from "../../repositories/IVendorRepository";
import { ListVendorDTO } from "./ListVendorDTO";

export class ListVendorsUseCase {
  constructor(
    private vendorsRepository: IVendorRepository
  ){}

  async execute(data: ListVendorDTO) {
    return await this.vendorsRepository.list(data.field, data.q, data.page);
  }
}