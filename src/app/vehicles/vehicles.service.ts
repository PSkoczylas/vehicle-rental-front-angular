import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({ providedIn: 'root'})
export class VehiclesService {
  private vehiclesUrl = '/api/vehicles/show/';
  vehicles: Vehicle[];
  constructor(private http: HttpClient) { }

  getVehicles (): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl);
  }
}
