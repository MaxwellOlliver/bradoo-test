export class Product {
  public readonly id: string;
  public vendor_id: string;
  public name: string;
  public code: string;
  public price: number;

  constructor(props: Omit<Product, 'id'>) {
    Object.assign(this, props);
  }
}