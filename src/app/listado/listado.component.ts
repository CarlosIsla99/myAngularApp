import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Validators } from '@angular/forms';
import { Departamento } from '../entidades/depto.model';
import { Empleado } from '../entidades/empleado.model';
import { ConexionDbService } from '../servicios/conexiondb.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private depto:ConexionDbService ) { }

  ngOnInit(): void {
    this.depto.cargarDepartamentos().subscribe(misEmpleados=>{
      this.departamentos = Object.values(misEmpleados);
    });
  }

  departamentos!:Departamento[];

  @Input()empleados!:Empleado[];

  empleadoMod!:Empleado;
  seleccionado!:number;
  empleadoModSelec!:number;
  activarEnviar!:boolean;
  buscar!:string;
  campo!:string;
  orden!:boolean;

  inputId!:number;
  inputNombre!:string;
  inputApellido!:string;
  inputEmail!:string;
  inputTfno!:string;
  inputDepto!:string;
  inputTyc!:boolean;
  
  @Output()eliminarE = new EventEmitter<number>();
  @Output()actualizarE = new EventEmitter<any>();

  eliminarEmpleado(indice:number) {
    this.eliminarE.emit(indice);
  }

  activarInputs(selec: number) {
    this.empleadoModSelec = selec;
    this.activarEnviar = true;

    for(let empleado of this.empleados){
      if(empleado.id === selec) {
        this.empleadoMod = empleado;
      }
    }

    this.inputId = this.empleadoMod.id;
    this.inputNombre = this.empleadoMod.nombre;
    this.inputApellido = this.empleadoMod.apellidos;
    this.inputEmail = this.empleadoMod.email;
    this.inputTfno = this.empleadoMod.tfno;
    this.inputDepto = this.empleadoMod.departamento;
    this.inputTyc = this.empleadoMod.condiciones;
  }

  actualizarEmpleado(id:number) {
    let empleadoCambiado = new Empleado(id, this.inputNombre, this.inputApellido, this.inputEmail, this.inputTfno, this.inputDepto, this.inputTyc);
    console.log(empleadoCambiado);
    this.actualizarE.emit({id, empleadoCambiado});
    this.desactivasrInputs();
  }

  seleccionar(empleado:Empleado){
    this.empleadoModSelec = -1;
    this.desactivasrInputs();
    if(this.seleccionado == empleado.id){
      this.seleccionado = -1;
    } else {
      this.seleccionado = empleado.id;
    }
  }

  desactivasrInputs() {
    this.empleadoModSelec = -1;
    this.activarEnviar = false;
  }

  ordenarPor(valor:string) {
    if(this.campo === valor) {
      this.orden = false;
    }
    this.campo = valor;
  }   

}