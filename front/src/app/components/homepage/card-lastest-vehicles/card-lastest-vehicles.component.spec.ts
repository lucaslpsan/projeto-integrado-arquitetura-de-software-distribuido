import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLastestVehiclesComponent } from './card-lastest-vehicles.component';

describe('CardLastestVehiclesComponent', () => {
  let component: CardLastestVehiclesComponent;
  let fixture: ComponentFixture<CardLastestVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLastestVehiclesComponent]
    });
    fixture = TestBed.createComponent(CardLastestVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
