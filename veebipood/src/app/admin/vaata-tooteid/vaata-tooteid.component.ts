import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {
  tooted: any[] = [
  // {nimi: "Coca cola", hind: 2, aktiivne: true}, 
  // {nimi: "Fanta", hind: 3, aktiivne: false},
  // {nimi: "Sprite", hind: 2.5, aktiivne: true}, 
  // {nimi: "Vichy", hind: 4, aktiivne: true}, 
  // {nimi: "Vitamin well", hind: 5, aktiivne: true}, 
  ];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {  //see funktsioon tehakse enne HTML-i
    
    this.http.get<any>(
      "https://angular-04-2022-default-rtdb.europe-west1.firebasedatabase.app//tooted.json")
            .subscribe(tootedFB => { //asünkroonne ehk lubab koodil edasi minna
      const uusMassiiv = [];
      for (const key in tootedFB) {
        uusMassiiv.push(tootedFB[key]);
        }
        this.tooted = uusMassiiv;

      
    })
  }

  kustutaToode(toode: any) {
    const j2rjekorranumber = this.tooted.indexOf(toode);
    this.tooted.splice(j2rjekorranumber,1)

    this.http.put("https://angular-04-2022-default-rtdb.europe-west1.firebasedatabase.app//tooted.json", 
    this.tooted).subscribe();

  }




}
