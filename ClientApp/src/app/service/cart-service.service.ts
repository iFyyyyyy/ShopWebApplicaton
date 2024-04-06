import { ProductState } from './../modules/ProductState';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItems$ = new Subject<ProductState[]>();



  //public cartItems$ = this.cartItems.asObservable();

constructor() {
}

public setCartItems(cartItems: ProductState[]) {
   this.cartItems$.next(cartItems);
   console.log(cartItems);
}

}
