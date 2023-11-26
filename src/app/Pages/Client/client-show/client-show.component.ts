import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent {

  clientId!: any;
  client!: any;
  vehicles!: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(this.clientId).subscribe((data) => {
      this.client = data
    });
    this.getVehicleList()
  }
  public isClicked: boolean = false;

  public bloquear(): void {
    this.isClicked = true;
  }

  getVehicleList() {
    this.clientService.getVehicles(this.clientId).subscribe((data) => {
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
        this.clientService.destroyVehicle(vehicleId).subscribe((res: any) => {
          this.getVehicleList();
        });
      }
    });

  }

}
