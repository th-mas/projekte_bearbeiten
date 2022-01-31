import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyChildComponent } from './baby-child.component';

describe('BabyChildComponent', () => {
  let component: BabyChildComponent;
  let fixture: ComponentFixture<BabyChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
