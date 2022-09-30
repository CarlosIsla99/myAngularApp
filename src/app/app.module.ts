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
import { RouterModule, Routes } from '@angular/router';
import { ConexionDbService } from './servicios/conexiondb.service';
import { EmpleadosServiceService } from './servicios/empleados-service.service';

const appRoutes:Routes=[
  // {path:'', component:HomeComponent, canActivate: [PermissionsGuard]},
  // {path:'proyectos', component:ProyectosComponent},
  // {path:'quienes', component:QuienesSomosComponent},
  // {path:'contacto', component:ContactoComponent},
  // {path:'actualizar/:id', component:ActualizarComponent},
  // {path:'login', component:LoginComponent},
  // {path:'**', component:Error404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    ConexionDbService,
    EmpleadosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
