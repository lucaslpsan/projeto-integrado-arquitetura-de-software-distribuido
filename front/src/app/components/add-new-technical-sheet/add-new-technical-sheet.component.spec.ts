import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTechnicalSheetComponent } from './add-new-technical-sheet.component';

describe('AddNewTechnicalSheetComponent', () => {
  let component: AddNewTechnicalSheetComponent;
  let fixture: ComponentFixture<AddNewTechnicalSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewTechnicalSheetComponent]
    });
    fixture = TestBed.createComponent(AddNewTechnicalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
