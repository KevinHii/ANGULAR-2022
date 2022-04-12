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

  constructor() { }

  ngOnInit(): void {
    const toodeNimi = location.href.split("muuda/")[1]; //võtame URL-ist tootenime
    const tootedLS = localStorage.getItem("tooted") //võtame localStorage-st kõik tooted
    if (tootedLS) { //tootedLS !== null kontrollime, et tooted on olemas localStorage-st
      const tooted: any[]= JSON.parse(tootedLS); //võtame localStorage-st saadult jutumärgid
      this.toode = tooted.find(element =>  element.nimi
        .replaceAll(' ', '-')
        .toLowerCase()
        .replaceAll('õ','o') === toodeNimi)
    this.muutmiseVorm = new FormGroup({
      nimi:new FormControl(this.toode.nimi),
      hind:new FormControl(this.toode.hind),
      aktiivne:new FormControl(this.toode.aktiivne)

    }); 
    }

  }

  muudaToode() {}

}
