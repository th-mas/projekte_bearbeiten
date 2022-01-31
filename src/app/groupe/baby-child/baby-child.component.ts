import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Groupe, User } from 'src/app/entities/group';


@Component({
  selector: 'baby',
  templateUrl: './baby-child.component.html',
  styleUrls: ['./baby-child.component.scss']
})
export class BabyChildComponent implements OnInit {

  @Input() g: string | null = '';



  constructor() {
    console.log("Hello from Child component: ");
    console.log("The passed groupe name to the Child is: ", this.g);
  }


  ngOnInit(): void {
  }

}

