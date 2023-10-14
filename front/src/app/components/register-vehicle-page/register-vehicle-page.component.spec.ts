import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVehiclePageComponent } from './register-vehicle-page.component';

describe('RegisterVehiclePageComponent', () => {
  let component: RegisterVehiclePageComponent;
  let fixture: ComponentFixture<RegisterVehiclePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterVehiclePageComponent]
    });
    fixture = TestBed.createComponent(RegisterVehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
