import { Product } from "../entities/Product";

export interface IProductRepository {
  findByCode(code: string, vendor_id: string): Promise<Product>;
  findById(id: string): Promise<Product>;
  save(product: Product): Promise<Product>;
  list(vendor_id: string): Promise<Product[]>;
  update(product: Product): Promise<void>;
  delete(product_id: string): Promise<void>;
}