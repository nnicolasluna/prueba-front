import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private httpClient: HttpClient) { }

  getClients() {
    return this.httpClient.get('http://localhost:8080/client/clients');
  }
  saveClient(inputData: object) {
    return this.httpClient.post('http://localhost:8080/client', inputData);
  }
  getClient(clientId: number) {
    return this.httpClient.get('http://localhost:8080/client/' + clientId);
  }
  getVehicles(clientId: number) {
    return this.httpClient.get('http://localhost:8080/vehicle/client/' + clientId);
  }
  updateClient(inputData: object, clientId: number) {
    return this.httpClient.put('http://localhost:8080/client/edit/' + clientId, inputData);
  }
  destroyClient(clientId: number) {
    return this.httpClient.delete('http://localhost:8080/client/delete/' + clientId);
  }
  destroyVehicle(vehicleId: number) {
    return this.httpClient.delete('http://localhost:8080/vehicle/delete/' + vehicleId);
  }
}
