import { Component } from '@angular/core';
import { VehicleService } from 'src/app/Services/vehicle.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vehicle-index',
  templateUrl: './vehicle-index.component.html',
  styleUrls: ['./vehicle-index.component.css']
})
export class VehicleIndexComponent {

  constructor(private vehicleService: VehicleService) { }

  vehicles: any;

  ngOnInit() {
    this.getVehicleList();
  }
  getVehicleList() {
    this.vehicleService.getVehicles().subscribe((data) => {
      console.log(data);
      this.vehicles = data
    });
  }
  deleteVehicle(event: any, vehicleId: number) {
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Esta acción no tiene vuelta atras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "Tu registro fue eliminado.",
          icon: "success"
        });
        this.vehicleService.destroyVehicle(vehicleId).subscribe((res: any) => { this.getVehicleList(); });
      }
    });



  }
}
