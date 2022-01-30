import { Component, OnInit } from '@angular/core';
import { item } from '../entities/projekt';


@Component({
  selector: 'app-projekt-suche',
  templateUrl: './projekt-suche.component.html',
  styleUrls: ['./projekt-suche.component.scss']
})
export class ProjektSucheComponent implements OnInit {

  name: string = "";
  kunde: string = "";
  holzart: string= "";
  frächter: string= "";
  schaetzmeter: number= 0;
  preis:number = 0;
  projekte: item[] = [];
  selectedProjekt: item | null=null

  constructor() {


  }

  ngOnInit(): void {
  }
  search():void {



   }


  select(p:item): void {
    this.selectedProjekt = p;
  }

}
