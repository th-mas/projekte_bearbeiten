import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {IdentifyComponentDialog} from "../dialog/identify/identify-dialog.component";
import {IdentifyService} from "../data-access/identify.service";
import {isLogged, loggedIn} from "../../app-routing.module";

@Component({
  selector: 'app-identify-component',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent implements OnInit {
  private retry = 0;

  constructor(public dialog: MatDialog, private service: IdentifyService, private router: Router) {

  }

  ngOnInit(): void {
    this.verifyUser();
  }

  verifyUser(): void {
    if (this.retry < 3 && !isLogged()) {
      this.retry++;
      this.showLoginDialog();
    } else {
      this.showSorry();
    }
  }

  private showSorry() {
    this.router.navigate(['/']);
  }

  private showLoginDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(IdentifyComponentDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.service.loginUser(result).subscribe({
        next: (response) => response && result.token === response.token ? this.goHome(response.id) : this.verifyUser(),
        error: () => this.verifyUser()
      })
    });
  }

  private goHome(user: string) {
    loggedIn(user);
    this.router.navigate(['/landing']);
  }
}

