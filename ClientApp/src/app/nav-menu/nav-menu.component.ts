import { Component } from '@angular/core';
import { ProductState } from '../modules/ProductState';
import { CartServiceService } from '../service/cart-service.service';
import { Product } from '../modules/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isExpanded = false;

  private subs: Subscription = new Subscription;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  cartStorage: ProductState[];

  constructor( private readonly cartService: CartServiceService) {
    this.cartStorage = [];

  }

  getFromStorage(){
    for ( let i = 1; i <= localStorage.length; i++){
      let data: ProductState = JSON.parse(localStorage.getItem(`CartItem:${i}`)!);
      this.cartStorage.push(data);
      }
  }

  ngOnInit() {
    if(localStorage){
      this.cartStorage = this.cartService.getCartItems();
    }
    this.subs = this.cartService.cartItems$.subscribe((data: ProductState[]) => {
      this.cartStorage = data;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onClickClear(): void {
    this.cartService.removeCartItems();
    this.cartStorage = [];
  }

}
