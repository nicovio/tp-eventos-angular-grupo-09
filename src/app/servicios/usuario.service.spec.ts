/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioService, StubUsuarioService } from './usuario.service';

describe('Service: Usuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StubUsuarioService]
    });
  });

  it('should ...', inject([StubUsuarioService], (service: StubUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
