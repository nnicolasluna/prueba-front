import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Pages/Partials/navbar/navbar.component';
import { ClientCreateComponent } from './Pages/Client/client-create/client-create.component';
import { HomeComponent } from './Pages/Partials/home/home.component';
import { ClientIndexComponent } from './Pages/Client/client-index/client-index.component';
import { ClientEditComponent } from './Pages/Client/client-edit/client-edit.component';
import { VehicleCreateComponent } from './Pages/Vehicle/vehicle-create/vehicle-create.component';
import { VehicleIndexComponent } from './Pages/Vehicle/vehicle-index/vehicle-index.component';
import { VehicleEditComponent } from './Pages/Vehicle/vehicle-edit/vehicle-edit.component';
import { ClientShowComponent } from './Pages/Client/client-show/client-show.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientCreateComponent,
    HomeComponent,
    ClientIndexComponent,
    ClientEditComponent,
    VehicleCreateComponent,
    VehicleIndexComponent,
    VehicleEditComponent,
    ClientShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
