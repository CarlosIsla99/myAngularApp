import { Injectable } from '@angular/core';
import { Empleado } from '../entidades/empleado/empleado.model';
import { ConexionDbService } from './conexiondb.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceService {

constructor(private db:ConexionDbService) { }

 cargarEmpleados(){
  return this.db.cargarEmpleados();
}

insertarEmpleados(empleado:Empleado) {
  this.db.agregarEmpleado(empleado);
}

borrarEmpleado(id:number) {
  this.db.borrarEmpleado(id);
}

modificarEmpleado(id:number, empleado:Empleado) {
  this.db.actualizarEmpleado(id, empleado);
}


}
