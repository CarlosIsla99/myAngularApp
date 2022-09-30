import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../entidades/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class ConexionDbService {

  constructor(private HttpClient:HttpClient) { }

  cargarEmpleados(){
    return this.HttpClient.get('http://localhost:3000/empleados/');
  }

  agregarEmpleado(empleado:Empleado){
    this.HttpClient.post('http://localhost:3000/empleados', empleado).subscribe(res=>res);
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let url = 'http://localhost:3000/empleados/' + indice;
    this.HttpClient.put(url, empleado).subscribe(res=>res);
  }

  borrarEmpleado(indice:number){
    let url = 'http://localhost:3000/empleados/'+ indice;
    this.HttpClient.delete(url).subscribe(res=>res);
  }

  cargarDepartamentos() {
    return this.HttpClient.get('http://localhost:3000/departamentos/');
  }

}
