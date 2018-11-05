/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventoService, StubEventoService } from './evento.service';

describe('Service: EventoAbierto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StubEventoService] });
  });

  it('should ...', inject([StubEventoService], (service: StubEventoService) => {
    expect(service).toBeTruthy();
  }));
});
