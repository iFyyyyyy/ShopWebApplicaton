import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  cartCounter: number = 0;
  cartCounterIsVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
