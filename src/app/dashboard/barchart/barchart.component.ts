import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {


  public graph = {

      data: [

          { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: {width: 320, height: 240, title: 'A Fancy Plot'}
    };





  constructor() { }

  ngOnInit(): void {
  }

}
