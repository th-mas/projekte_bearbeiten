import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {



  public graph = {

    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },

    ],
    layout: {width: 320, height: 240, title: 'A Fancy Plot'}
  };


  constructor() { }

  ngOnInit(): void {
  }

}
