import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: './identify-dialog.component.html',
  styleUrls: ['./identify-dialog.component.scss']
})
export class IdentifyComponentDialog {
  user: string = '';
  token: string = '';
  payload: object = {};

  constructor(private ref: MatDialogRef<IdentifyComponentDialog>) {
  }

  identify(): void {
    this.payload = {id: this.user, token: this.token};
    this.ref.close(this.payload);
  }

}
