import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {

  client: Client = new Client();
  constructor(private clientService: ClientService, private router: Router) { }

  saveClient() {
    this.clientService.saveClient(this.client).subscribe({
      next: (res: any) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Tu registro fue guardado",
          showConfirmButton: false,
          timer: 1000
        });
        console.log(res, 'response')
        this.router.navigate(['/client/index']);
      },
      error: (err: any) => {
        console.log(err, 'error')
      }
    });
  }

}
