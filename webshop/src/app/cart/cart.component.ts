import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  parcelMachines: any[] = [];
  selectedParcelMachine: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const cartItemsSS = sessionStorage.getItem("cartItems");
    if (cartItemsSS) {
      this.cartProducts = JSON.parse(cartItemsSS);
    }
    this.http.get<any>("https://www.omniva.ee/locations.json").subscribe(res => 
      this.parcelMachines = res);
      // subscribe --- viib päringu läbi, teeb asünkroonseks (lubab koodil edasi minna)
      // res ---- kuhu tuleb tagastus
      // res => ..... -----funktsioon, mis käibitub koheselt kui res kätte saadakse

      this.selectedParcelMachine = sessionStorage.getItem("parcelMachine");
     
      
  }
  onParcelMachineSelected() {
    sessionStorage.setItem("parcelMachine", this.selectedParcelMachine);
    this.cartProducts.push({
      product: {id: 11122333,name:"Pakiautomaadi tasu",price: 3.5, imgSrc: "assets/locker.png", category: "", description: "", isActive: true}, 
      quantity: 1})
      sessionStorage.setItem("cartItems", JSON.stringify(this.cartProducts));
  }

  onUnselectedParcelMachine() {
    this.selectedParcelMachine = null;
    sessionStorage.removeItem("parcelMachine")
    /*this.onRemoveProduct({
      product: {id: 11122333,name:"Pakiautomaadi tasu",price: 3.5, imgSrc: "assets/locker.png", category: "", description: "", isActive: true}, 
      quantity: 1})*/
  }

  calculateSumOfCart() {

  }
}