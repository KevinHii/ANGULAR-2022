import { Component, ComponentFactoryResolver, OnInit } from '@angular/core'; //import node_modules seest


@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  // massiiv / list / array 
            // 5st elemendist
tooted = [{nimi: "Coca cola", hind: 2, aktiivne: true}, 
{nimi: "Fanta", hind: 3, aktiivne: false},
{nimi: "Sprite", hind: 2.5, aktiivne: true}, 
{nimi: "Vichy", hind: 4, aktiivne: true}, 
{nimi: "Vitamin well", hind: 5, aktiivne: true}, 
];

  

  constructor() {
    console.log("pannakse Avaleht constructor käima");
   }

  ngOnInit(): void {
    console.log("pannakse Avaleht ngOnInit käima");
  }

lisaOstukorvi(toode: any){
  const ostukorvSS = sessionStorage.getItem("ostukorviTooted");
  let ostukorv = [];
  if (ostukorvSS !== null) {  //null = tühjus    !== ei võrdu
    ostukorv = JSON.parse(ostukorvSS);
   
}
 ostukorv.push(toode);
 sessionStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));
}


// salvestamine ostukorvi:
// 1. andmebaas - kasutajad, tellimused, tooted
// 2. brauserisse - ostukorvi sisu, veebilehe seaded
// 3. faili

}

