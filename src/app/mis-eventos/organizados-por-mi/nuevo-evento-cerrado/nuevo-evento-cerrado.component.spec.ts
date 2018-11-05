import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { EventoService, StubEventoService } from 'src/app/servicios/evento.service';
import { LocacionService, StubLocacionService } from 'src/app/servicios/locacion.service';
import { NuevoEventoCerradoComponent } from './nuevo-evento-cerrado.component';

describe('NuevoEventoCerradoComponent', () => {
  let component: NuevoEventoCerradoComponent
  let fixture: ComponentFixture<NuevoEventoCerradoComponent>

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents()

    TestBed.overrideComponent(NuevoEventoCerradoComponent, {
      set: {
        providers: [
          { provide: UsuarioService, useClass: StubUsuarioService },
          // { provide: EventoService, useClass: StubEventoService},
          // { provide: LocacionService, useClass: StubLocacionService }
        ]
      }
    })

    fixture = TestBed.createComponent(NuevoEventoCerradoComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
