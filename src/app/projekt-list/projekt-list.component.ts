import { Component, OnInit } from '@angular/core';
import { item } from '../entities/projekt';
import { ProjektHinzuComponent } from './projekt-hinzu/projekt-hinzu.component';

@Component({
  selector: 'app-projekt-list',
  templateUrl: './projekt-list.component.html',
  styleUrls: ['./projekt-list.component.scss']
})
export class ProjektListComponent implements OnInit {



  ident = Date.now();

  projekte: item[]=[
    new item(13012022,"Hans Bieber","Huber","PHA","FI","Mayer",250,95),
    new item(24012022,"Pieps Vogel","Franz","RHI","KI","Sepl",20,55),
    new item(26012022,"Karl Elefant","Huber","Heuer","FI","Mayer",7,85),
    new item(26012022,"Josef Pingu","Hias","Mayer","EI","Sepl",15,450)


  ]
  static projekte: any;
  constructor() {

  }

  ngOnInit(): void {
  }

}
