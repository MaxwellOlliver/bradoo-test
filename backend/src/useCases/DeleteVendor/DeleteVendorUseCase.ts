import { Vendor } from "../../entities/Vendor";
import { IVendorRepository } from "../../repositories/IVendorRepository";
import { IDeleteVendorDTO } from "./DeleteVendorDTO";

export class DeleteVendorUseCase {
  constructor(
    private vendorsRepository: IVendorRepository
  ) {}

  async execute({ _id }: IDeleteVendorDTO) {
    const vendorExists = await this.vendorsRepository.findById(_id);

    if (!vendorExists) {
      throw new Error("Vendor does not exists");
    }

    await this.vendorsRepository.delete(_id);
  }
}