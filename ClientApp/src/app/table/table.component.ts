import { ProductState } from './../modules/ProductState';
import { ProductService } from '../service/product-service.service';
import { AfterViewInit, Component, OnInit, ViewChild, inject, } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modules/Product';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'button'];
  dataSource: MatTableDataSource<ProductState>;
  products: ProductState[];
  cartItems: ProductState[];

  pageIndex: number = 0;
  pageSize: number = 5;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private productService: ProductService,  private readonly cartService: CartServiceService) {
    this.products = [];
    this.cartItems = [];
    this.dataSource = new MatTableDataSource(this.products);


   }

  ngOnInit() {
    this.getFirstDataJSON();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    productState.inCart = true;
    productState.count++;
    localStorage.setItem(JSON.stringify(productState.product.id), JSON.stringify(productState));
    this.addToCart(productState);

    //@inject;
  }

  public addToCart(productState: ProductState): void {
        this.cartService.cartItems$.subscribe(data =>{
          this.cartItems = data;
        });
        this.cartItems.push(productState);
        this.cartService.setCartItems(this.cartItems);
  };



  setProductState(products: Product[]){
    let productState: ProductState[] = [];
    products.forEach(product => {
      productState.push(new ProductState(product));
    });
    return productState;
  }




}
