import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentifyComponent } from './identify-component/identify.component';
import {IdentifyComponentDialog} from './dialog/identify/identify-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {IdentifyGuard} from "./identify-guard.service";



@NgModule({
  declarations: [
    IdentifyComponent,
    IdentifyComponentDialog
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule
  ],
  exports:[
    IdentifyComponent
  ],
  providers: [IdentifyGuard]
})
export class IdentifyModule { }
