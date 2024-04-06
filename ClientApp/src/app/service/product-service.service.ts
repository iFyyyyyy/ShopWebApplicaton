import { Product } from './../modules/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  urlJSON: string = '/assets/data-source.json';

  getFirstDataJSON(){
    return this.http.get<Product[]>(this.urlJSON).pipe();
  }







}
