import { Product } from './Product';
export class ProductState {

  product: Product;
  inCart: boolean;
  count: number;

  constructor(product: Product) {
    this.product = product;
    this.inCart = false;
    this.count = 0;
  }

}
