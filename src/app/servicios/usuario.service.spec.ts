/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsuarioService, MockUsuarioService } from './usuario.service';

describe('Service: Usuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockUsuarioService]
    });
  });

  it('should ...', inject([MockUsuarioService], (service: MockUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
