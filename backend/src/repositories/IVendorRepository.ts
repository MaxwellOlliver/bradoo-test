import { Vendor } from "../entities/Vendor";

export interface IVendorRepository {
  findByCNPJ(cnpj: string): Promise<Vendor>;
  findById(id: string): Promise<Vendor>;
  list(field: string, q?: string, page?: number): Promise<Vendor[]>;
  save(vendor: Vendor): Promise<Vendor>;
  update(vendor: Vendor): Promise<void>;
  delete(id: string): Promise<void>;
}