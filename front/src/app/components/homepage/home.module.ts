import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CardLastestVehiclesComponent } from './card-lastest-vehicles/card-lastest-vehicles.component';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [CardLastestVehiclesComponent, HomepageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [CardLastestVehiclesComponent],
})
export class HomeModule {}
