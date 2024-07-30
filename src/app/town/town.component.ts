import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProvinceService } from '../address.service';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})
export class TownComponent {
  @Input() provinceControl!: FormControl; // Accept the province control as an input from the parent component
  townsOrCities: { townOrCity: string, zipCode: string }[] = [];

  constructor(private provinceService: ProvinceService) { }

  fetchTownsOrCities() {
    const selectedProvince = this.provinceControl.value;
    if (selectedProvince) { 
      this.provinceService.getTownsOrCities(selectedProvince).subscribe(
        townsOrCities => this.townsOrCities = townsOrCities,
        error => console.error('Error fetching towns or cities:', error)
      );
    }
  }
}
