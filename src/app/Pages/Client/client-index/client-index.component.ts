import { Component } from '@angular/core';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2'
declare const $: any;

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent {

  constructor(private clientService: ClientService) { }

  clients: any;

  ngOnInit() {
    this.getClientList();
  }
  getClientList() {
    this.clientService.getClients().subscribe((data) => {
      console.log(data);
      this.clients = data
    });
  }
  deleteClient(event: any, clientId: number) {

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
        this.clientService.destroyClient(clientId).subscribe((res: any) => { this.getClientList(); });
      }
    });
  }

}
