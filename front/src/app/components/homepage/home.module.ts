import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLastestVehiclesComponent } from './card-lastest-vehicles/card-lastest-vehicles.component';
import { MatCardModule } from '@angular/material/card';
import { HomepageComponent } from './homepage.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardLastestVehiclesComponent, HomepageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [CardLastestVehiclesComponent],
})
export class HomeModule {}
