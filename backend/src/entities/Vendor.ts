import { Product } from "./Product";

export class Vendor {
  public readonly id: string;
  public name: string;
  public cnpj: string; 
  public city: string;
  public products: Product[]

  constructor(props: Omit<Vendor, 'id'>) {
    Object.assign(this, props);
  }
}