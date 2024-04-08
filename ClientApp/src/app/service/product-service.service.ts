import { Product } from './../modules/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlJSON: string = '/assets/data-source.json';

  serverUrl: string = 'http://localhost:8080/api/getAllProducts/';

  constructor(private http: HttpClient) { }


  // getFirstDataJSON(): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.urlJSON).pipe();
  // }

  getFirstDataJSON(): Observable<Product[]>{
    return this.http.get<Product[]>(this.serverUrl);
  }





}
