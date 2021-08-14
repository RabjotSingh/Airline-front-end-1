import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatSystemComponent } from './seat-system.component';

describe('SeatSystemComponent', () => {
  let component: SeatSystemComponent;
  let fixture: ComponentFixture<SeatSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
