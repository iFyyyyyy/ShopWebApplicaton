import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductState } from '../modules/ProductState';
import { CartServiceService } from '../service/cart-service.service';
import { Product } from '../modules/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit /*, OnDestroy*/ {

  private subs: Subscription = new Subscription;

  cartStorage: ProductState[];

  totalCost: number = 0;



  constructor( private readonly cartService: CartServiceService) {
    this.cartStorage = [];
    //this.cartStorage = [new ProductState(new Product())];
  }

  onClickMakeOrder(){}

  onClickRemoveFromCart(){
    this.cartStorage = [];
    this.cartService.removeCartItems();
  }


  ngOnInit(): void {
    this.cartStorage =this.cartService.getCartItems();
    this.countTotalCost();
  }

  countTotalCost(){
    this.cartStorage.forEach(product => {
      this.totalCost += (product.product.price * product.count);
    });
  }



  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.totalCost = 0;
  }

}
