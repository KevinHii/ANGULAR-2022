import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Lisa(vorm: any) {
    console.log(vorm);
    console.log(vorm.value.nimi);
    console.log(vorm.value.hind);
    console.log(vorm.value.aktiivne);
  }
}
