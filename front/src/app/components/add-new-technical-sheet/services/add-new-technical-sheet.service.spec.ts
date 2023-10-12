import { TestBed } from '@angular/core/testing';

import { AddNewTechnicalSheetService } from './add-new-technical-sheet.service';

describe('AddNewTechnicalSheetService', () => {
  let service: AddNewTechnicalSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewTechnicalSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
