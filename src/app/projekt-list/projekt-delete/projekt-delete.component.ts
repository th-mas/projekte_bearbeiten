import { Component, Input, OnInit } from '@angular/core';
import {projekte} from "../projekt-list.component"


@Component({
  selector: 'app-projekt-delete',
  templateUrl: './projekt-delete.component.html',

})
export class ProjektDeleteComponent implements OnInit {

  @Input() projekte : any[] = []


  removeItem(i:number): void{
    projekte.splice(i,1)}





  constructor() { }

  ngOnInit(): void {
  }

}
