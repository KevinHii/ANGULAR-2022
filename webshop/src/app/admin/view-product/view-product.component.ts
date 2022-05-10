
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  descriptionWordCount = 5;
  products: any[] = [];
  //originalProducts: Products[] = [];
  searchedProduct:string = "";
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.getProductsFromDb().subscribe( => {
    //   for (const key in response) {
    //     this.products.push(response[key]);
   //       this.originalProducts.push(response[key]);
    //   }
    // });
  }

  // onFilterProducts() {
  //   this.products = this.products.filter(element =>
  //      element.name.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
  //      element.description.toLowerCase().indexOf(this.searchedProduct.toLowerCase()) >= 0 ||
  //       element.id.toString().indexOf(this.searchedProduct.toLowerCase()) >= 0 );
  // }

}
