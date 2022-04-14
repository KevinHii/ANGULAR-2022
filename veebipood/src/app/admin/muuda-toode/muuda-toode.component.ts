import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  toode: any;
  muutmiseVorm: any;
  private tooted: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const toodeNimi = location.href.split("muuda/")[1]; //võtame URL-ist tootenime
    // const tootedLS = localStorage.getItem("tooted") //võtame localStorage-st kõik tooted
    // if (tootedLS) { //tootedLS !== null kontrollime, et tooted on olemas localStorage-st
    //   const tooted: any[]= JSON.parse(tootedLS); //võtame localStorage-st saadult jutumärgid
    this.http.get<any>(
      "https://angular-04-2022-default-rtdb.europe-west1.firebasedatabase.app//tooted.json")
            .subscribe(tootedFB => {
      const uusMassiiv = [];
      for (const key in tootedFB) {
        uusMassiiv.push(tootedFB[key]);
        }
      this.tooted = uusMassiiv;
        this.toode = this.tooted.find(element =>  element.nimi
          .replaceAll(' ', '-')
          .toLowerCase()
          .replaceAll('õ','o') === toodeNimi)
      this.muutmiseVorm = new FormGroup({
        nimi:new FormControl(this.toode.nimi),
        hind:new FormControl(this.toode.hind),
        aktiivne:new FormControl(this.toode.aktiivne)
      }); 

      
    })
    
   
    }

    
  

  muudaToode() {
    const j2rjekorranumber = this.tooted.indexOf(this.toode);
    this.tooted[j2rjekorranumber] = this.muutmiseVorm.value;
    this.http.put("https://angular-04-2022-default-rtdb.europe-west1.firebasedatabase.app//tooted.json", 
    this.tooted).subscribe();

  }

}
