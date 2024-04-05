import { Attributes } from "./Attributes";

export class Product {

  id: number | null;
  name: string;
  price: number;
  attr: Attributes;


  constructor() {
    this.id = null;
    this.price = 0;
    this.name = "";
    this.attr = new Attributes;

  }
}
