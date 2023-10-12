import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getLastsVehicles() {
    return this.http.get<any>('api/vehicle/lasts');
  }
}
