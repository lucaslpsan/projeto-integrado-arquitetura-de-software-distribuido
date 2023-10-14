import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getSearchVehicle(term: string) {
    return this.http.get<Vehicle>(`api/vehicle?nome=${term}`);
  }

  getLastsVehicles() {
    return this.http.get<any>('api/vehicle/lasts');
  }
}
