import { Vendor } from "../../entities/Vendor";
import { IVendorRepository } from "../../repositories/IVendorRepository";
import { ICreateVendorRequestDTO } from './CreateVendorDTO';

export class CreateVendorUseCase {
  constructor(
    private vendorsRepository: IVendorRepository
  ) {}

  async execute(data: ICreateVendorRequestDTO) {
    const vendorAlreadyExists = await this.vendorsRepository.findByCNPJ(data.cnpj);

    if (vendorAlreadyExists) {
      throw new Error("Vendor already exists");
      
    }

    const vendor = new Vendor(data);

    return await this.vendorsRepository.save(vendor);
  }
}