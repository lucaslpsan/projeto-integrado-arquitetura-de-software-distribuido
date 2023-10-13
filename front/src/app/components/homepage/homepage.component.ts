import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  tap,
  switchMap,
  finalize,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { Vehicle } from 'src/app/models/vehicle';
import { HomeService } from 'src/app/shared/services/home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  carros?: Vehicle[];

  searchVehiclesCtrl = new FormControl();
  filteredVehicles: any;
  isLoading = false;
  errorMsg!: string;
  minLengthTerm = 3;
  selectedVehicle: any = '';

  constructor(private service: HomeService) {}

  onSelected() {
    console.log(this.selectedVehicle);
    this.selectedVehicle = this.selectedVehicle;
  }

  displayWith(value: any) {
    return value?.brand;
  }

  clearSelection() {
    this.selectedVehicle = '';
    this.filteredVehicles = [];
  }

  ngOnInit() {
    this.service.getLastsVehicles().subscribe((data) => {
      this.carros = data;
    });

    this.searchVehiclesCtrl.valueChanges
      .pipe(
        filter((res) => {
          return res !== null && res.length >= this.minLengthTerm;
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = '';
          this.filteredVehicles = [];
          this.isLoading = true;
        }),
        switchMap((value) =>
          this.service.getSearchVehicle(value).pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
        )
      )
      .subscribe((data: any) => {
        console.log(data);

        if (data == undefined) {
          this.errorMsg = data['Error'];
          this.filteredVehicles = [];
        } else {
          this.errorMsg = '';
          this.filteredVehicles = data;
        }
        console.log(this.filteredVehicles);
      });
  }
}
