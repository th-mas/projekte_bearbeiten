import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'normal user', 'Hero', 'ich bin müde', 'Wieso fange ich einen Tag vorher mit sowas an'];

  constructor() { }

  ngOnInit() {
  }


}
