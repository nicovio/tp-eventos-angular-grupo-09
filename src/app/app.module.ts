import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
import { DatePickerComponent } from './share/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { TextboxNombreComponent } from './mis-eventos/organizados-por-mi/nuevo-evento-cerrado/textbox-nombre/textbox-nombre.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextboxLocacionComponent } from './mis-eventos/organizados-por-mi/nuevo-evento-cerrado/textbox-locacion/textbox-locacion.component';

@NgModule({
  declarations: [AppComponent, routingComponents, PerfilComponent, NavbarComponent, UserImageComponent, AmigosComponent, MisEventosComponent, SidebarEventosComponent, AgendaComponent, OrganizadosPorMiComponent, InvitacionesPendientesComponent, ListaDeEventosComponent, NotFoundComponent, DatePickerComponent, TextboxNombreComponent, TextboxLocacionComponent],
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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
