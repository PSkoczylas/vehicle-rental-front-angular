import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehiclesService } from './vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[];
  dataSource = this.vehicles;
  displayedColumns: string[] = ['id', 'vehicleType', 'name', 'nr', 'productionDate', 'manufacturer', 'color'];

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles()
    .subscribe(vehicles => this.vehicles = vehicles);
  }
}
