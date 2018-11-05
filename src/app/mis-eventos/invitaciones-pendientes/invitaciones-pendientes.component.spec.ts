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

  it('deberia mostrar 2 invitaciones pendientes', () => {
    expect(3).toBe(component.invitacionesPendientes.length)
  })

  // it('should show 2 pending tasks', async () => {
  //   expect(2).toBe(component.tareas.length)
  // })

  // it('first task could be mark as done', async () => {
  //   const resultHtml = fixture.debugElement.nativeElement
  //   expect(resultHtml.querySelector('#cumplir_1')).toBeTruthy()
  // })

  // it('mark first task as done', async () => {
  //   const resultHtml = fixture.debugElement.nativeElement
  //   resultHtml.querySelector('#cumplir_1').click()
  //   fixture.detectChanges()
  //   expect(resultHtml.querySelector('#porcentaje_1').textContent).toBe("100,00")
  // })

  // it('unassign first task', async () => {
  //   const resultHtml = fixture.debugElement.nativeElement
  //   resultHtml.querySelector('#desasignar_1').click()
  //   fixture.detectChanges()
  //   expect(resultHtml.querySelector('#asignatario_1').textContent).toBe("")
  // })

  // it('searching for second task should have one tr in tasks list', async () => {
  //   component.tareaBuscada = "2"
  //   fixture.detectChanges()
  //   const resultHtml = fixture.debugElement.nativeElement
  //   expect(resultHtml.querySelectorAll('.animate-repeat').length).toBe(1)
  // })

})