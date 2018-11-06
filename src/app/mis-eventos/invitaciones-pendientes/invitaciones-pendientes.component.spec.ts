import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitacionesPendientesComponent } from './invitaciones-pendientes.component';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { AppModule } from 'src/app/app.module';
import { Invitacion } from 'src/app/domain/eventos/invitacion';


describe('InvitacionesPendientesComponent', () => {
  let component: InvitacionesPendientesComponent
  let fixture: ComponentFixture<InvitacionesPendientesComponent>

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

    TestBed.overrideComponent(InvitacionesPendientesComponent, {
      set: {
        providers: [
          { provide: UsuarioService, useClass: StubUsuarioService }
        ]
      }
    })

    fixture = TestBed.createComponent(InvitacionesPendientesComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Tiene 3 invitaciones pendientes', () => {
    expect(3).toBe(component.invitacionesPendientes.length)
  })

  it('Aceptar invitacion', async () => {
    const resultHtml = fixture.debugElement.nativeElement
    const invitacionAceptada: Invitacion = component.invitacionesPendientes.find(invitacion => invitacion.id === 0)
    component.cantidadAcompaniantes = 2
    fixture.detectChanges()
    resultHtml.querySelector('#aceptarInvitacion_0').click()
    fixture.detectChanges()
    expect(invitacionAceptada.aceptada).toBe(false)
    resultHtml.querySelector('#confirmarAceptacion_0').click()
    await fixture.detectChanges()
    expect(invitacionAceptada.aceptada).toBe(true)
  })

  it('Rechazar invitacion', async () => {
    const resultHtml = fixture.debugElement.nativeElement
    fixture.detectChanges()
    resultHtml.querySelector('#rechazarInvitacion_0').click()
    fixture.detectChanges()
    expect(component.invitacionesPendientes.length).toBe(3)
    resultHtml.querySelector('#confirmarRechazo_0').click()
    await fixture.detectChanges()
    expect(component.invitacionesPendientes.length).toBe(2)
  })
})