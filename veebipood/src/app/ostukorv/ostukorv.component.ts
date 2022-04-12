import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TreeError } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
ostukorviTooted: any[] = [];
koguSumma= 0;



  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("pannakse Ostukorv ngOnInit käima");
    const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
    if (ostukorvSS !== null) {
      this.ostukorviTooted = JSON.parse(ostukorvSS);
    }
    this.arvutaKogusumma();

  }


  //UUE MUUTUJA TEKITAMINE)uus väärtus ja sellele viitav sõna)
  //1. sulguyde sees --toode-- ta saab väärtuse HTML-s (Click)="kustutaToode ('S')"
          //HTML-st saadakse väärtus
  //2. const või let abil -- j2rjekorraNumber -- saab väärtuse funktsiooni sees
          //nähtav ainult funktsiooni sees
  //3. klassimuutuja -- ostukorviTooted -- saab väärtuse export class abil
          //saan saata HTMLi ja funktsoonid saavad seda muutujat kätte this. abil

  kustutaToode(toode: any) {
    // js delete element from array------https://stackoverflow.com/
    // https://www.codegrepper.com/
    // find index with .indexOf mozilla indefox
    // remove with. splice()
    const j2rjekorranumber = this.ostukorviTooted.indexOf(toode);
    this.ostukorviTooted.splice(j2rjekorranumber,1)
    sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma();
  }

  lisaToode(toode: any) {
    // console.log("töötab")
    // console.log(toode);
    this.ostukorviTooted.push(toode);
    sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma(); 
  }

  tyhjendaTooted() {
    this.ostukorviTooted = [];
    sessionStorage.setItem("ostukorviTooted", JSON.stringify(this.ostukorviTooted));
    this.arvutaKogusumma();
    /*  SALVESTAMINE:
      1. Andmebaas
      2. Brauseri mälu
      3. Faili kirjutamine */
  }

  //------------------Ostukorvi summa

  arvutaKogusumma() {
    this.koguSumma = 0;
    this.ostukorviTooted.forEach(element => this.koguSumma =this.koguSumma + element.hind);
    //tsükli - võtta kõigi toodete küljest hind ja lisada see kgusummale

  }


  maksma() {
    const makseAndmed= {
      
        "api_username": "92ddcfab96e34a5f",
        "account_name": "EUR3D1",
        "amount": this.koguSumma,
        "order_reference": Math.random() * 999999,
        "nonce": "a569b7f7" + new Date() + Math.random() * 999999,
        "timestamp": new Date(),
        "customer_url": "https://angular-04-2022.web.app/"
        }
        const headers = {
          headers: new HttpHeaders(
            {
              "Authorization": 
              "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
            }
          )
        };
        this.http.post<any>("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
         makseAndmed, 
         headers).subscribe(tagastus => location.href = tagastus.payment_link);

        
    
  }

}   
// string = " Sõnaline muutuja"; //"22s" + "33a" --> "22s33a"
// number = 11; //numbriline muutuja
// boolean = true; //kahendväärtus: rangelt true või false

  

  // korrutaKahega() {
  //   this.number = this.number * 2;
  // }

  // muudaBoolean() {
  //   this.boolean = false
  // }
  
  // tyhjendaString() {
  //   this.string= "";
  // } 

  // muudaBooleantrue() {
  //   this.boolean = !this.boolean
  // }
    




  //muutujad ja funktsioonid algavad väikse tähega ja 
  // ja iga järgnev sõna on suure tähega

  /* funktsioon saab errori kui ei ole () ja {}
  funktsiooni nime järel olevad tavalised sulud tähistavad millegi
  vastuvõtmist - HTMLst 

  loogelised sulud funktsiooni järel tähistavad selle funktsiooni 
  algust ja lõppu */
  

  


