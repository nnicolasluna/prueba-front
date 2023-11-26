import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  getVehicles() {
    return this.httpClient.get('http://localhost:8080/vehicle/vehicles');
  }
  saveVehicle(inputData: object) {
    return this.httpClient.post('http://localhost:8080/vehicle', inputData);
  }
  getVehicle(vehicleId: number) {
    return this.httpClient.get('http://localhost:8080/vehicle/' + vehicleId);
  }
  updateVehicle(inputData: object, vehicleId: number) {
    return this.httpClient.put('http://localhost:8080/vehicle/edit/' + vehicleId, inputData);
  }
  destroyVehicle(vehicleId: number) {
    return this.httpClient.delete('http://localhost:8080/vehicle/delete/' + vehicleId);
  }
}
