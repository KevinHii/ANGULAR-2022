import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare let Email: any;
import 'src/assets/smtp.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  dbUrl= "https://webshio04-22-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.dbUrl).subscribe(response => {
      for (const key in response) {
        this.products.push(response[key]);
      }
    });
   
  }

  onAddToCart(productClicked: any) {
  const cartItemsSS = sessionStorage.getItem("cartItems");
  let cartItems: any[] = [];
  if (cartItemsSS) {
    cartItems = JSON.parse(cartItemsSS);
  }
  const index = cartItems.findIndex(element => element.product.id === productClicked.id);
  if (index >= 0 ) {
    cartItems[index].quantity++;

  } else {
    const parcelMachineIndex = cartItems.findIndex(element => element.product.id = 11122333);
    if (parcelMachineIndex >= 0) {
      cartItems.splice(parcelMachineIndex,0,{product: productClicked, quantity: 1});
    }
    cartItems.push({ product: productClicked, quantity: 1 });
  }
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  muutuja: any
  pealkiri: any

  // SHOP KAUSTA LISADA!!!!!!
  onSendEmail () {
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "khiiemae@gmail.com",
      Password : "F4A3257B96FAB1BCB1C9B61C11F8B2677065",
      To : 'britta.liias98@gmail.com',
      From : "khiiemae@gmail.com",
      Subject : this.pealkiri,
      Body : "Klient kirjutas: " + this.muutuja + " . Saadetud: " + new Date()
  }).then(
    (message: any) => alert(message)
  );
  }
 
}
