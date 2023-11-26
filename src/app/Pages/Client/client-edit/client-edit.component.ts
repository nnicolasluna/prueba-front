import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {

  clientId!: any;
  client!: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(this.clientId).subscribe((data) => {
      this.client = data
    });
  }
  updateClient() {
    var inputData = {
      name: this.client.name,
      paternal: this.client.paternal,
      maternal: this.client.maternal,
      documentType: this.client.documentType,
      idNumber: this.client.idNumber,
      date: this.client.date,
      gender: this.client.gender
    }

    Swal.fire({
      title: "¿Quieres guardar los cambios?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Guardado!", "", "success");
        this.clientService.updateClient(inputData, this.clientId).subscribe({
          next: (res: any) => {
            console.log(res, 'response')
            this.router.navigate(['/client/index']);
          },
          error: (err: any) => {
            console.log(err, 'error')
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Cambios no guardados", "", "info");
      }
    });
    
    
  }
}
