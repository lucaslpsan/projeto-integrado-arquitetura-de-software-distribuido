import { Component, Input } from '@angular/core';
import { Garage } from 'src/app/models/garage';

@Component({
  selector: 'app-card-my-vehicles',
  templateUrl: './card-my-vehicles.component.html',
  styleUrls: ['./card-my-vehicles.component.css'],
})
export class CardMyVehiclesComponent {
  @Input()
  myVehicle!: Garage;

  quilometragem?: number;

  panelOpenState = false;

  sortedData: any;

  porcetagemParaTrocaDeOleo(): number {
    return (
      (this.myVehicle.km.total - this.myVehicle.oil.previousExchange) / 100
    );
  }
}
