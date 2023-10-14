import { Component, Input } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-card-lastest-vehicles',
  templateUrl: './card-lastest-vehicles.component.html',
  styleUrls: ['./card-lastest-vehicles.component.css'],
})
export class CardLastestVehiclesComponent {
  @Input() vehicle!: Vehicle;
}
