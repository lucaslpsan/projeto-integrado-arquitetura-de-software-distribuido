import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddNewTechnicalSheetService } from './services/add-new-technical-sheet.service';
import { Brand } from 'src/app/models/brand';
import { EnumTypes } from 'src/app/models/enum-types';

@Component({
  selector: 'app-add-new-technical-sheet',
  templateUrl: './add-new-technical-sheet.component.html',
  styleUrls: ['./add-new-technical-sheet.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AddNewTechnicalSheetComponent implements OnInit {
  loadedBrands?: Brand[];
  loadedFuels?: EnumTypes[];

  firstFormGroup = this._formBuilder.group({
    brand: [null, Validators.required],
    name: [null, Validators.required],
    year: [null, Validators.required],
    origin: [null, Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    engine: [null, Validators.required],
    fuel: [null, Validators.required],
    hp: [null, Validators.required],
    aspiration: [null, Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private service: AddNewTechnicalSheetService
  ) {}

  ngOnInit(): void {
    this.service.getBrands().subscribe((data) => {
      this.loadedBrands = data;
    });

    this.service.getFuels().subscribe((data) => {
      this.loadedFuels = data;
    });
  }

  getErrorMessage(field: string, nameField: string) {
    if (this.firstFormGroup.get(field)?.hasError('required')) {
      return `Informe ${nameField}`;
    }

    return this.firstFormGroup.get(field)?.hasError(field)
      ? 'Informe ' + nameField + ' válido.'
      : '';
  }

  submeter() {
    const sheet = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
    };
    console.log(sheet);

    this.service.saveNewSheet(sheet);
  }
}
