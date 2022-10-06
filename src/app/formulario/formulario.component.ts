import { Component, OnInit } from '@angular/core';
import { Departamento } from '../entidades/depto.model';
import { Empleado } from '../entidades/empleado.model';
import { ConexionDbService } from '../servicios/conexiondb.service';
import { EmpleadosServiceService } from '../servicios/empleados-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private lista:EmpleadosServiceService, private depto:ConexionDbService) { }

  ngOnInit(): void {
    this.lista.cargarEmpleados().subscribe(misEmpleados=>{
      this.empleados = Object.values(misEmpleados);
    });

    this.depto.cargarDepartamentos().subscribe(misEmpleados=>{
      this.departamentos = Object.values(misEmpleados);
    });
  }

  empleados!:Empleado[];
  departamentos!:Departamento[];

  enviarForm(data:Empleado) {
    this.lista.insertarEmpleados(data);
    data.id = this.empleados[this.empleados.length-1].id + 1;
    this.empleados.push(data);
  }

  eliminarEmpleado(id:number) {
    this.lista.borrarEmpleado(id);
    for(let i=0; i<this.empleados.length; i++) {
      if(this.empleados[i].id === id) {
        this.empleados.splice(i, 1);
      }
    }
  }

  modificarEmpleado(data:any) {
    this.lista.modificarEmpleado(data.empleadoCambiado.id, data.empleadoCambiado)
    
    for(let i=0; i<this.empleados.length; i++) {
      if(this.empleados[i].id === data.id) {
        this.empleados[i] = data.empleadoCambiado;
      }
    }
  }

}
