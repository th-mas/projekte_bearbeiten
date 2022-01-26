import { Component,  OnInit } from '@angular/core';
import { ProjektListComponent } from 'src/app/projekt-list/projekt-list.component';



@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})


export class BarchartComponent implements OnInit {


 // mit plotly erstellt Quelle: https://www.npmjs.com/package/angular-plotly.js/v/0.1.13

  public graph = {

      data: [

          { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: {width: 320, height: 240, title: 'Projekte Übersicht'}


    };





  constructor() { }

  ngOnInit(): void {
  }

}
function data(arg0: string, data: any, layout: any) {
  throw new Error('Function not implemented.');
}

function layout(arg0: string, data: any, layout: any) {
  throw new Error('Function not implemented.');
}

