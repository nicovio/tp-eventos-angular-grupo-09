import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule, ModalDirective, ModalModule } from 'angular-bootstrap-md';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmigosComponent } from './perfil/amigos/amigos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UserImageComponent } from './perfil/user-image/user-image.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MaterialModule } from './angular-material-module/material.module';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { SidebarEventosComponent } from './mis-eventos/shared/sidebar-eventos/sidebar-eventos.component';
import { AgendaComponent } from './mis-eventos/agenda/agenda.component';
import { OrganizadosPorMiComponent } from './mis-eventos/organizados-por-mi/organizados-por-mi.component';
import { InvitacionesPendientesComponent } from './mis-eventos/invitaciones-pendientes/invitaciones-pendientes.component';
import { ListaDeEventosComponent } from './mis-eventos/agenda/lista-de-eventos/lista-de-eventos.component';
import { NotFoundComponent } from './share/not-found/not-found.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NuevoEventoAbiertoComponent } from './mis-eventos/organizados-por-mi/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NuevoEventoCerradoComponent } from './mis-eventos/organizados-por-mi/nuevo-evento-cerrado/nuevo-evento-cerrado.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlDateTimeIntl } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { DefaultIntl } from './share/DefaultIntl';

//En caso de que no importe las dates, instalar los paquetes: npm i @angular/material-moment-adapter

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PerfilComponent,
    NavbarComponent,
    UserImageComponent,
    AmigosComponent,
    MisEventosComponent,
    SidebarEventosComponent,
    AgendaComponent,
    OrganizadosPorMiComponent,
    InvitacionesPendientesComponent,
    ListaDeEventosComponent,
    NotFoundComponent,
    NuevoEventoAbiertoComponent,
    NuevoEventoCerradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ModalModule,
    NgxMaterialTimepickerModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    // { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'es-ES' },
    { provide: OwlDateTimeIntl, useClass: DefaultIntl },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      // deps: [MAT_DATE_LOCALE]
    },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
