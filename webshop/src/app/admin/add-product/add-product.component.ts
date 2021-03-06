import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  dbUrl="https://webshio04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  categoriesDbUrl= "https://webshio04-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json"
  categories:{categoryName: string} [] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ categoryName: string} []>(this.categoriesDbUrl).subscribe(categoriesFromDb => {
      const newArray = [];
      for (const key in categoriesFromDb) {
        newArray.push(categoriesFromDb[key]);
      }
      this.categories = newArray;
    })
  }

  
onSubmit(addProductForm: NgForm) {
  this.http.post(this.dbUrl, addProductForm.value).subscribe();
  addProductForm.reset();
}
}
