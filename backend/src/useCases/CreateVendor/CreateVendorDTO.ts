import { Product } from "../../entities/Product";

export interface ICreateVendorRequestDTO {
  name: string;
  cnpj: string;
  city: string;
  products: Product[];
}