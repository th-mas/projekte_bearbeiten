import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {isLogged} from "../app-routing.module";


@Injectable()
export class IdentifyGuard implements CanActivate {

  constructor(
    private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(isLogged()) {
      return true;
    } else {
      this.router.navigate([`/identify`]);
      return false;
    }
  }
}
