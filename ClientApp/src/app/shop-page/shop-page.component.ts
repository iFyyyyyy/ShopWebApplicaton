import { ProductService } from './../service/product-service.service';
import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Product } from '../modules/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
})
export class ShopPageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price'];
  dataSource: MatTableDataSource<Product>;
  products: Product[];

  pageIndex: number = 0;
  pageSize: number = 5;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(private productService: ProductService) {
    this.products = [];
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
      this.products = response;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
