import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PermisosGuard } from './guards/permisos.guard';
import { SinGuardarGuard } from './guards/sin-guardar.guard';
import { HomeComponent } from './home/home.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'formulario', component:FormularioComponent, canDeactivate:[SinGuardarGuard]},
  {path:'link', component:LinkComponent, canActivate:[PermisosGuard]},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
