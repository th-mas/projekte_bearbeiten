import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {getUserInfo, isAdmin, isLogged, logout} from "../common/UserContext";
import {of} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userId = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.userId = getUserInfo();
  }

  logout(): void {
    logout();
    this.router.navigate(['/']);
  }

  isAdmin(): boolean {
    return isAdmin();
  }

  isLogged(): boolean {
    return isLogged();
  }

}
