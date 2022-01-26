import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {item} from '../../entities/projekt';

@Component({
  selector: 'app-projekt-hinzu',
  templateUrl: './projekt-hinzu.component.html',
  styleUrls: ['./projekt-hinzu.component.scss']
})
export class ProjektHinzuComponent implements OnInit {
  @ViewChild('bearbInput')
  bearbInputRef!: ElementRef;
  @ViewChild('nameInput')
  nameInputRef!: ElementRef;
  @ViewChild('kundeInput')
  kundeInputRef!: ElementRef;
  @ViewChild('holzartInput')
  holzartInputRef!: ElementRef;
  @ViewChild('fraechterInput')
  fraechterInputRef!: ElementRef;
  @ViewChild('schaetzmeterInput')
  schaetzmeterInputRef!: ElementRef;
  @ViewChild('preisInput')
  preisInputRef!: ElementRef;
  @Output() hinzufuegen = new EventEmitter<item>();

  public ident:number = Date.now();

  constructor() { }

  ngOnInit():void {

  }
  onAddItem() {
    const ingBearb = this.bearbInputRef.nativeElement.value;
    const ingName = this.nameInputRef.nativeElement.value;
    const ingKunde = this.kundeInputRef.nativeElement.value;
    const ingholz = this.holzartInputRef.nativeElement.value;
    const ingfr = this.fraechterInputRef.nativeElement.value;
    const ingschaetz = this.schaetzmeterInputRef.nativeElement.value;
    const ingpreis = this.preisInputRef.nativeElement.value;

    const newProj:any = new item(this.ident,ingBearb,ingName,ingKunde,ingholz,ingfr,ingschaetz,ingpreis);
    this.hinzufuegen.emit(newProj);
  }

}
