import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  carros?: Vehicle[];

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.getLastsVehicles().subscribe((data) => {
      this.carros = data;
    });
  }
}
