import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductState } from '../modules/ProductState';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {



//   private subs: Subscription = new Subscription;

//   cartStorage1: ProductState[];



//   constructor( private readonly cartService: CartServiceService) {
//     this.cartStorage1 = [];
//     //this.cartStorage = [new ProductState(new Product())];
//   }
//   ngOnInit(): void {
//     console.log(this.cartStorage1 + "2");
//     this.subs = this.cartService.cartItems$.subscribe((res) => {
//       this.cartStorage1 = res;
//       console.log(this.cartStorage1);
//     }, error => {
//       console.log(error);
//     }
//     );
//     console.log(this.cartStorage1 + "3");
//   }
}
