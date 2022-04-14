import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core'; //import node_modules seest


@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  // massiiv / list / array 
            // 5st elemendist
tooted: any= []

  

  constructor(private http: HttpClient) {
    console.log("pannakse Avaleht constructor käima");
   }

  ngOnInit(): void {
    console.log("pannakse Avaleht ngOnInit käima");
    this.http.get<any>(
      "https://angular-04-2022-default-rtdb.europe-west1.firebasedatabase.app//tooted.json")
            .subscribe(tootedFB => {
      const uusMassiiv = [];
      for (const key in tootedFB) {
        uusMassiiv.push(tootedFB[key]);
        }
        this.tooted = uusMassiiv;

      
    })
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

