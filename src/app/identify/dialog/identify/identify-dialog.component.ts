import {Component, HostListener, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './identify-dialog.component.html',
  styleUrls: ['./identify-dialog.component.scss']
})
export class IdentifyComponentDialog implements OnInit {
  userForm: FormGroup;

  constructor(private ref: MatDialogRef<IdentifyComponentDialog>, private fb: FormBuilder) {
    this.userForm = new FormGroup({
      id: this.fb.control('420', [Validators.required]),
      token: this.fb.control('password', [Validators.required, Validators.minLength(6)])
    });

  }

  identify(): void {
    if (this.userForm.valid) {
      this.ref.close(this.userForm.value);
    }
  }

  @HostListener('window:keyup.Enter', ['$event'])
  onDialogClick(event: KeyboardEvent): void {
    if (this.userForm.valid) {
      this.identify();
    }
  }
  register(): void {
    this.ref.close('GO_REGISTER_YOURSELF');
  }

  ngOnInit(): void {
  }

}
