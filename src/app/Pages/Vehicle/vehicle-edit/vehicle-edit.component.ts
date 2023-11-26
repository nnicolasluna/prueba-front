import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/Services/vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent {

  vehicleId!: any;
  vehicle!: any;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(this.vehicleId).subscribe((data) => {
      this.vehicle = data
    });
  }
  updateVehicle() {
    var inputData = {
      make: this.vehicle.make,
      model: this.vehicle.model,
      year: this.vehicle.year,
      license: this.vehicle.license,
    }
    this.vehicleService.updateVehicle(inputData, this.vehicleId).subscribe({
      next: (res: any) => {
        console.log(res, 'response')

      },
      error: (err: any) => {
        console.log(err, 'error')
      }
    });
    this.router.navigate(['/vehicle/index']);
  }

}
