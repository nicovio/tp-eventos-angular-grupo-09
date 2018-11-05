import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitacionesPendientesComponent } from './invitaciones-pendientes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from 'src/app/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { RefrescarPantallaComponent } from 'src/app/share/refrescar-pantalla/refrescar-pantalla.component';
import { PerfilComponent } from 'src/app/perfil/perfil.component';
import { NavbarComponent } from 'src/app/share/navbar/navbar.component';
import { MisEventosComponent } from '../mis-eventos.component';
import { NotFoundComponent } from 'src/app/share/not-found/not-found.component';
import { NuevoEventoAbiertoComponent } from '../organizados-por-mi/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NuevoEventoCerradoComponent } from '../organizados-por-mi/nuevo-evento-cerrado/nuevo-evento-cerrado.component';
import { AppComponent } from 'src/app/app.component';
import { UserImageComponent } from 'src/app/perfil/user-image/user-image.component';
import { AmigosComponent } from 'src/app/perfil/amigos/amigos.component';
import { SidebarEventosComponent } from '../shared/sidebar-eventos/sidebar-eventos.component';
import { AgendaComponent } from '../agenda/agenda.component';
import { OrganizadosPorMiComponent } from '../organizados-por-mi/organizados-por-mi.component';
import { ListaDeEventosComponent } from '../agenda/lista-de-eventos/lista-de-eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { MaterialModule } from 'src/app/angular-material-module/material.module';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
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

  it('Tiene 2 invitaciones pendientes', () => {
    expect(3).toBe(component.invitacionesPendientes.length)
  })

  it('Aceptar invitacion', async () => {
    const resultHtml = fixture.debugElement.nativeElement
    component.cantidadAcompaniantes = 2
    fixture.detectChanges()
    resultHtml.querySelector('#aceptarInvitacion_0').click()
    fixture.detectChanges()
    resultHtml.querySelector('#confirmarAceptacion_0').click()
    await fixture.detectChanges()
    const invitacionAceptada: Invitacion = component.invitacionesPendientes.find(invitacion => invitacion.id === 0)
    expect(invitacionAceptada.aceptada).toBe(true)
  })

  it('Rechazar invitacion', async () => {
    const resultHtml = fixture.debugElement.nativeElement
    fixture.detectChanges()
    resultHtml.querySelector('#rechazarInvitacion_0').click()
    fixture.detectChanges()
    resultHtml.querySelector('#confirmarRechazo_0').click()
    await fixture.detectChanges()
    expect(component.invitacionesPendientes.length).toBe(2)
  })
})