import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-lastest-vehicles',
  templateUrl: './card-lastest-vehicles.component.html',
  styleUrls: ['./card-lastest-vehicles.component.css'],
})
export class CardLastestVehiclesComponent {
  @Input() marca = '';
  @Input() modelo = '';
  @Input() ano = 0;
}
