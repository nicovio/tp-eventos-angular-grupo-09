import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { NuevoEventoAbiertoComponent } from './nuevo-evento-abierto.component';
import { EventoService, StubEventoService } from 'src/app/servicios/evento.service';
import { LocacionService, StubLocacionService } from 'src/app/servicios/locacion.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import Usuario from 'src/app/domain/usuarios/usuario';
import Locacion from 'src/app/domain/eventos/locacion';
import Evento from 'src/app/domain/eventos/evento';

describe('NuevoEventoAbiertoComponent', () => {
  let component: NuevoEventoAbiertoComponent
  let fixture: ComponentFixture<NuevoEventoAbiertoComponent>

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

    TestBed.overrideComponent(NuevoEventoAbiertoComponent, {
      set: {
        providers: [
          { provide: UsuarioService, useClass: StubUsuarioService },
          { provide: EventoService, useClass: StubEventoService},
          { provide: LocacionService, useClass: StubLocacionService }
        ]
      }
    })

    fixture = TestBed.createComponent(NuevoEventoAbiertoComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('crear un evento abierto', async () => {
    const karaDanvers: Usuario = await component.serviceUsuario.getUsuarioById(0)
    const resultHtml = fixture.debugElement.nativeElement
    let eventoTest = new EventoAbierto("Stravaganza", new Date('2019/7/22 21:30'), new Date('2019/7/22 23:00'), new Locacion("Teatro Broadway"), karaDanvers, 2000)
    component.nuevoEvento = eventoTest
    fixture.detectChanges()
    resultHtml.querySelector('#aceptar_0').click()
    await fixture.detectChanges()
    const eventoCreado: Evento = karaDanvers.eventosPorOrganizar.find(evento => evento.descripcion === "Stravaganza")
    expect(eventoCreado.descripcion).toBe("Stravaganza")
    expect(eventoCreado.fechaHoraInicio.toLocaleDateString()).toBe('22/7/2019')
    expect(eventoCreado.locacion.descripcion).toBe("Teatro Broadway")
    expect(eventoCreado.organizador.nombre).toBe("Kara")
    expect(eventoCreado.organizador.apellido).toBe("Danvers")
  })

})
