export class Empleado {

    constructor(id:number, nombre:string, apellidos:string, email:string, tfno:string, departamento:string, condiciones:boolean) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos =apellidos;
        this.email = email;
        this.tfno = tfno;
        this.departamento = departamento
        this.condiciones = condiciones;
    }

    id!:number;
    nombre!:string;
    apellidos!:string;
    email!:string;
    tfno!:string;
    departamento!:string;
    condiciones!:boolean;
}