import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektSucheComponent } from './projekt-suche.component';

describe('ProjektSucheComponent', () => {
  let component: ProjektSucheComponent;
  let fixture: ComponentFixture<ProjektSucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektSucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
