import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { EnumTypes } from 'src/app/models/enum-types';

@Injectable({
  providedIn: 'root',
})
export class AddNewTechnicalSheetService {
  constructor(private http: HttpClient) {}

  getBrands() {
    return this.http.get<Brand[]>('api/brand');
  }

  getFuels() {
    return this.http.get<EnumTypes[]>('api/vehicle/fuel');
  }

  saveNewSheet(sheet: any) {
    this.http.post<any>('api/vehicle', sheet).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
}
