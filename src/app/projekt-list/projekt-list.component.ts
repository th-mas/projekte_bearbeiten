import { Component, OnInit } from '@angular/core';

import { item } from '../entities/projekt';


@Component({
  selector: 'app-projekt-list',
  templateUrl: './projekt-list.component.html',
  styleUrls: ['./projekt-list.component.scss']
})
export class ProjektListComponent implements OnInit {
  find(name: string, bearbeiter: string, kunde: string, holzart: string, fraechter: string, preis: number) {
    throw new Error('Method not implemented.');
  }



  projects = projekte;

  constructor() {
    console.log()
  }

  ngOnInit(): void {
    console.log()
  }
  onhinzufuegen(Item:item){
    projekte.push(Item);
  }

}
export const projekte: item[]=[
  new item(13012022,"Hans Bieber","Huber","PHA","FI","Mayer",250,95),
  new item(24012022,"Pieps Vogel","Franz","RHI","KI","Sepl",20,55),
  new item(26012022,"Karl Elefant","Huber","Heuer","FI","Mayer",7,85),
  new item(26012022,"Josef Pingu","Hias","Mayer","EI","Sepl",15,450),




];
