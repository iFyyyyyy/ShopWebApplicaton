import { ProductState } from './../modules/ProductState';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItems$ = new Subject<ProductState[]>();
  clearState: ProductState[] = [];

  //public cartItems$ = this.cartItems.asObservable();

constructor() {
  this.cartItems$.next(this.getCartItems());
}

public getCartItems(){
  let data: ProductState[] = [];
  for ( let i = 1; i <= localStorage.length; i++){
    data.push(JSON.parse(localStorage.getItem(`CartItem:${i}`)!));
  }
  return data;
}

public removeCartItems(){
  this.setCartItems(this.clearState);
  localStorage.clear();
}

public setCartItems(cartItems: ProductState[]) {
   this.cartItems$.next(cartItems);
   console.log(cartItems);
}

}
