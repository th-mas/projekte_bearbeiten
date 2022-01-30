import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentifyComponent } from './identify-component/identify.component';
import {IdentifyComponentDialog} from './dialog/identify/identify-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {IdentifyGuard} from "./identify-guard.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AngularMaterialModule} from "../angular-material.module";
import {AdminGuard} from "./admin-guard.service";



@NgModule({
  declarations: [
    IdentifyComponent,
    IdentifyComponentDialog
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports:[
    IdentifyComponent
  ],
  providers: [IdentifyGuard, AdminGuard]
})
export class IdentifyModule { }
