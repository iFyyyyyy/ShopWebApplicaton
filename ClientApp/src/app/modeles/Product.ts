import { Attributes } from './../modules/Attributes';

export class Product {

  id: number | null;
  name: string;
  price: number;
  attributes: Attributes;


  constructor() {
    this.id = null;
    this.price = 0;
    this.name = "";
    this.attributes = new Attributes;

  }
}
