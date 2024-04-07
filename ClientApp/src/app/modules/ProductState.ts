import { Product } from './Product';
export class ProductState {

  product: Product;
  inCart: boolean;
  count: number;

  constructor(product: Product, inCart: boolean) {
    this.product = product;
    this.inCart = inCart;
    this.count = 0;
  }

}
