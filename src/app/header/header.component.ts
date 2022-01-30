import {Component, OnInit} from '@angular/core';
import {getUserId, logout} from "../app-routing.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userId = getUserId();

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  logout(): void {
    logout();
    this.router.navigate(['/']);
  }

}
