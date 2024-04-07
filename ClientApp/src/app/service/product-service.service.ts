import { Product } from './../modules/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlJSON: string = '/assets/data-source.json';

  serverUrl: string = `https://localhost:8080/api/product/getAllProducts`;

  constructor(private http: HttpClient) { }


  // getFirstDataJSON(){
  //   return this.http.get<Product[]>(this.urlJSON).pipe();
  // }

  getFirstDataJSON(): Observable<Product[]>{
    // console.log(this.http.get<Product[]>(`${this.serverUrl}`).subscribe());
    return this.http.get<Product[]>(`${this.serverUrl}`).pipe();
  }





}
