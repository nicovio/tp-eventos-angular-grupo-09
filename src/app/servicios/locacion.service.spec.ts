import { TestBed } from '@angular/core/testing';

import { LocacionService, StubLocacionService } from './locacion.service';

describe('LocacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StubLocacionService = TestBed.get(StubLocacionService);
    expect(service).toBeTruthy();
  });
});
