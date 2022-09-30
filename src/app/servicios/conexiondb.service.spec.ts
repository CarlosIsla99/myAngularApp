import { TestBed } from '@angular/core/testing';

import { ConexionDbService } from './conexiondb.service';

describe('ConexionDbService', () => {
  let service: ConexionDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
