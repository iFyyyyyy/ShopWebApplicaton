import { ProductState } from './../modules/ProductState';
import { ProductService } from '../service/product-service.service';
import { AfterViewInit, Component, OnInit, ViewChild, inject, } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modules/Product';
import { CartServiceService } from '../service/cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'button'];
  dataSource: MatTableDataSource<ProductState>;
  products: ProductState[];
  cartStorage: ProductState[];

  subs: Subscription = new Subscription;

  cartCounter: number = 0;
  pageIndex: number = 0;
  pageSize: number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService,  private readonly cartService: CartServiceService) {
    this.products = [];
    this.cartStorage = [];
    this.dataSource = new MatTableDataSource(this.products);
  }

  ngOnInit() {
    this.getFirstDataJSON();
    this.subs = this.cartService.cartItems$.subscribe((data: ProductState[]) => {
      this.cartStorage = data;
  })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Подгрузка прайс листа из JSON файла data-source из ТЗ
  getFirstDataJSON(){
    this.productService.getFirstDataJSON().subscribe((response: Product[])  => {
      this.dataSource = new MatTableDataSource<ProductState>(this.setProductState(response));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  onClickAddToCart(productState: ProductState){
    this.cartCounter++;
    productState.inCart = true;
    productState.count++;
    localStorage.setItem(`CartItem:${this.cartCounter}`, JSON.stringify(productState));
    this.addToCart(productState);
  }

  public addToCart(productState: ProductState): void {
        this.cartStorage.push(productState);
        this.cartService.setCartItems(this.cartStorage);
  };

  setProductState(products: Product[]){
    let productState: ProductState[] = [];
    products.forEach(product => {
        if(localStorage.getItem(`CartItem:${product.id}`)){
          productState.push(new ProductState(product, true));
      }
      else productState.push(new ProductState(product, false));
    });
    return productState;
  }

}
