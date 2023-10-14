import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyVehiclesComponent } from './card-my-vehicles.component';

describe('CardMyVehiclesComponent', () => {
  let component: CardMyVehiclesComponent;
  let fixture: ComponentFixture<CardMyVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMyVehiclesComponent]
    });
    fixture = TestBed.createComponent(CardMyVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
