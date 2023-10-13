import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { Garage } from 'src/app/models/garage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  myGarage: Garage[] = [];
  constructor(
    public authService: AuthService,
    private service: DashboardService
  ) {}

  ngOnInit(): void {
    this.service.getMyGarage().subscribe((data) => {
      this.myGarage = data;
    });
  }
}
