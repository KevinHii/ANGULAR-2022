import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dbUrl= "https://webshio04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  cartChanged = new Subject

  constructor(private http: HttpClient) { }
  
  getProductsFromDb() {
    
  }
}
