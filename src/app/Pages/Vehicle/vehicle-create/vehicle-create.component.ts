import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent {

  vehicleId!: any;
  make!: string
  model!: string
  year!: string
  license!: string
  client!: Client 
  k!: Client  
  x!: any;
  constructor(private vehicletService: VehicleService, private router: Router, private route: ActivatedRoute, private clientService: ClientService) { }

  saveVehicle() {
 
    var inputData = {
      make: this.make,
      model: this.model,
      year: this.year,
      license: this.license,
     
    }
    
    this.router.navigate(['/client/index']);
  }
  public isClicked: boolean = false;

 
}
