import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { EventoService, StubEventoService } from 'src/app/servicios/evento.service';
import { LocacionService, StubLocacionService } from 'src/app/servicios/locacion.service';
import { NuevoEventoCerradoComponent } from './nuevo-evento-cerrado.component';
import Usuario from 'src/app/domain/usuarios/usuario';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import Locacion from 'src/app/domain/eventos/locacion';
import Evento from 'src/app/domain/eventos/evento';

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
          { provide: EventoService, useClass: StubEventoService },
          { provide: LocacionService, useClass: StubLocacionService }
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

  it('crear un evento cerrado', async () => {
    const karaDanvers: Usuario = await component.usuarioService.getUsuarioById(0)
    const resultHtml = fixture.debugElement.nativeElement
    let eventoTest = new EventoCerrado("Estreno Creed II", new Date('2019/10/26 22:30'), new Date('2019/10/27 01:00'), new Locacion("The Egyptian theatre"), karaDanvers, new Date('2019/5/20 00:30'))
    component.nuevoEvento = eventoTest
    fixture.detectChanges()
    resultHtml.querySelector('#crear_evento_0').click()
    await fixture.detectChanges()
    const eventoCreado: Evento = karaDanvers.eventosPorOrganizar.find(evento => evento.descripcion === "Estreno Creed II")
    expect(eventoCreado.descripcion).toBe("Estreno Creed II")
    expect(eventoCreado.fechaHoraInicio.toLocaleDateString()).toBe('26/10/2019')
    expect(eventoCreado.locacion.descripcion).toBe("The Egyptian theatre")
    expect(eventoCreado.organizador.nombre).toBe("Kara")
    expect(eventoCreado.organizador.apellido).toBe("Danvers")
  })

})
