import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../entidades/empleado.model';

@Pipe({
  name: 'buscar',
})

export class FilterPipe implements PipeTransform {
  transform(empleados: Empleado[], arg: string): Empleado[] {
    if (!arg) return empleados;

    let result: Empleado[] = [];

    for (let empleado of empleados) {
      if (empleado.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result = [...result, empleado];
      }
    }
    return result;
  }
}
