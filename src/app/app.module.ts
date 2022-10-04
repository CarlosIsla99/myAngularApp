import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { ConexionDbService } from './servicios/conexiondb.service';
import { EmpleadosServiceService } from './servicios/empleados-service.service';
import { FilterPipe } from './pipes/filter.pipe';
import { LinkComponent } from './link/link.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent,
    ListadoComponent,
    LinkComponent,
    FilterPipe,
    OrderByPipe  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ConexionDbService,
    EmpleadosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
