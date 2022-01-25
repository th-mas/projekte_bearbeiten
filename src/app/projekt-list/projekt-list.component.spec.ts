import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektListComponent } from './projekt-list.component';

describe('ProjektListComponent', () => {
  let component: ProjektListComponent;
  let fixture: ComponentFixture<ProjektListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
