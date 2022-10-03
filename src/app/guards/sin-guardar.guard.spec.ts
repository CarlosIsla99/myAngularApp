import { TestBed } from '@angular/core/testing';

import { SinGuardarGuard } from './sin-guardar.guard';

describe('SinGuardarGuard', () => {
  let guard: SinGuardarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SinGuardarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
