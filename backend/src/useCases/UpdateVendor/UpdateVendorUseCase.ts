import { Vendor } from "../../entities/Vendor";
import { IVendorRepository } from "../../repositories/IVendorRepository";
import { IUpdateVendorRequestDTO } from './UpdateVendorDTO';

export class UpdateVendorUseCase {
  constructor(
    private vendorsRepository: IVendorRepository
  ) {}

  async execute(data: IUpdateVendorRequestDTO) {
    const vendorExists = await this.vendorsRepository.findById(data.id);

    if (!vendorExists) {
      throw new Error('Vendor does not exists');
    }
    
    if (vendorExists.cnpj !== data.cnpj) {
      const cnpjAvailable = await this.vendorsRepository.findByCNPJ(data.cnpj);
  
      if (cnpjAvailable) {
        throw new Error('CNPJ not available');
      }
    }

    const vendor = new Vendor(data as any);

    await this.vendorsRepository.update(vendor);
  }
}