import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Garage } from 'src/app/models/garage';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getMyGarage() {
    return this.http.get<Garage[]>('api/garage');
  }
}
