import { Component, OnInit } from '@angular/core';

import { ProjektListComponent } from '../projekt-list.component';

@Component({
  selector: 'app-projekt-delete',
  templateUrl: './projekt-delete.component.html',

})
export class ProjektDeleteComponent implements OnInit {

  @Input() projekte


  removeItem(i:number): void{
    ProjektListComponent.projekte.splice(i,1)}





  constructor() { }

  ngOnInit(): void {
  }

}
