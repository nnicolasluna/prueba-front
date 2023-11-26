import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './Pages/Client/client-create/client-create.component';
import { HomeComponent } from './Pages/Partials/home/home.component';
import { ClientIndexComponent } from './Pages/Client/client-index/client-index.component';
import { ClientEditComponent } from './Pages/Client/client-edit/client-edit.component';
import { VehicleCreateComponent } from './Pages/Vehicle/vehicle-create/vehicle-create.component';
import { VehicleIndexComponent } from './Pages/Vehicle/vehicle-index/vehicle-index.component';
import { VehicleEditComponent } from './Pages/Vehicle/vehicle-edit/vehicle-edit.component';
import { ClientShowComponent } from './Pages/Client/client-show/client-show.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, title: 'home' },

  { path: 'client/create', component: ClientCreateComponent, title: 'Client Create' },
  { path: 'client/index', component: ClientIndexComponent, title: 'Client Index' },
  { path: 'client/edit/:id', component: ClientEditComponent, title: 'Client Edit' },
  { path: 'client/show/:id', component: ClientShowComponent, title: 'Client Show' },

  { path: 'vehicle/create/:id', component: VehicleCreateComponent, title: 'Vehicle Create' },
  { path: 'vehicle/index', component: VehicleIndexComponent, title: 'Vehicle Index' },
  { path: 'vehicle/edit/:id', component: VehicleEditComponent, title: 'Vehicle Edit' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
