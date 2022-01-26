import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-projekt-hinzu',
  templateUrl: './projekt-hinzu.component.html',
  styleUrls: ['./projekt-hinzu.component.scss']
})
export class ProjektHinzuComponent implements OnInit {

  ident = Date.now();

  constructor() { }

  ngOnInit():void {

  }

}
