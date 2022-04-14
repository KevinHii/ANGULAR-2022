import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  Lisa(vorm: any) {

    if (vorm.valid) {
      this.http.post("https://angular-04-2022-default-rtdb.europe-west1.firebasedatabase.app//tooted.json", 
      vorm.value).subscribe();
    }
    // console.log(vorm);
    // console.log(vorm.value.nimi);
    // console.log(vorm.value.hind);
    // console.log(vorm.value.aktiivne);
  }
}
