/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventoAbiertoService } from './evento-abierto.service';

describe('Service: EventoAbierto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventoAbiertoService]
    });
  });

  it('should ...', inject([EventoAbiertoService], (service: EventoAbiertoService) => {
    expect(service).toBeTruthy();
  }));
});
