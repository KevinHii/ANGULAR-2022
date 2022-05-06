import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  dbUrl="https://webshio04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private http: HttpClient) { }

  getProductsFromDb() {
    return this.http.get<[]>(this.dbUrl)
  }
}
