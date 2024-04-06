import { Component, OnInit } from '@angular/core';
import { ProductState } from '../modules/ProductState';
import { CartServiceService } from '../service/cart-service.service';
import { Product } from '../modules/Product';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  isButtonEnabled = false;

  cartStorage: ProductState[];

  newCartItem: ProductState;


  constructor( private readonly cartService: CartServiceService) {
    this.cartStorage = [];
    this.newCartItem = new ProductState(new Product);
  }



  ngOnInit() {
    this.cartService.cartItems$.subscribe((res) => {
      if(res){
      this.cartStorage = res;
      this.toggleButton;
      }
    }
    );

  }

  toggleButton():void {
    this.isButtonEnabled = !this.isButtonEnabled;
  }

}
