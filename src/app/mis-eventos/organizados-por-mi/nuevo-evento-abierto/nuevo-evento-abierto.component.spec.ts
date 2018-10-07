import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEventoAbiertoComponent } from './nuevo-evento-abierto.component';

describe('NuevoEventoAbiertoComponent', () => {
  let component: NuevoEventoAbiertoComponent;
  let fixture: ComponentFixture<NuevoEventoAbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEventoAbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEventoAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
