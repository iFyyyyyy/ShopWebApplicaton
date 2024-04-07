import { CartServiceService } from './../service/cart-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductState } from '../modules/ProductState';
import { Product } from '../modules/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor() { }



  ngOnInit() {}

}
