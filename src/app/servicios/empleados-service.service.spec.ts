/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpleadosServiceService } from './empleados-service.service';

describe('Service: EmpleadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpleadosServiceService]
    });
  });

  it('should ...', inject([EmpleadosServiceService], (service: EmpleadosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
