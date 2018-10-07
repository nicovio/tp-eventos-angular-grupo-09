import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEventoCerradoComponent } from './nuevo-evento-cerrado.component';

describe('NuevoEventoCerradoComponent', () => {
  let component: NuevoEventoCerradoComponent;
  let fixture: ComponentFixture<NuevoEventoCerradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEventoCerradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEventoCerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
