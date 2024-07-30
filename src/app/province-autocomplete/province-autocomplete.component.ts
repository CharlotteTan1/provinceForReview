import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProvinceService } from '../address.service';

@Component({
  selector: 'app-province-autocomplete',
  templateUrl: './province-autocomplete.component.html',
  styleUrls: ['./province-autocomplete.component.scss']
})
export class ProvinceAutocompleteComponent implements OnInit {
  provinceControl = new FormControl();
  provinces: string[] = [];
  filteredProvinces!: Observable<string[]>;

  constructor(private provinceService: ProvinceService) { }

  ngOnInit() {
    this.provinceService.getProvinces().subscribe(
      (data: { province: string }[]) => {
        this.provinces = data.map(item => item.province);
        this.filteredProvinces = this.provinceControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterProvinces(value))
          );
      },
      error => console.error('Error fetching provinces:', error)
    );
  }

  private _filterProvinces(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.provinces.filter(province => province.toLowerCase().includes(filterValue));
  }
}
