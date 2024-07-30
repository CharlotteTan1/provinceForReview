import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private apiUrl = 'https://apidev.usl.edu.ph/api/PublicAPI'; // Base URL for your API

  constructor(private http: HttpClient) { }

  getProvinces(): Observable<{ province: string }[]> {
    return this.http.get<{ province: string }[]>(`${this.apiUrl}/Provinces`);
  }

  getTownsOrCities(province: string): Observable<{ townOrCity: string, zipCode: string }[]> {
    return this.http.get<{ townOrCity: string, zipCode: string }[]>(`${this.apiUrl}/TownsCities/${province}`);
  }
}
