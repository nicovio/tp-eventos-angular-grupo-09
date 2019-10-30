import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { AgendaComponent } from './mis-eventos/agenda/agenda.component';
import { OrganizadosPorMiComponent } from './mis-eventos/organizados-por-mi/organizados-por-mi.component';
import { InvitacionesPendientesComponent } from './mis-eventos/invitaciones-pendientes/invitaciones-pendientes.component';
import { NotFoundComponent } from './share/not-found/not-found.component';
import { NuevoEventoAbiertoComponent } from './mis-eventos/organizados-por-mi/nuevo-evento-abierto/nuevo-evento-abierto.component';
import { NuevoEventoCerradoComponent } from './mis-eventos/organizados-por-mi/nuevo-evento-cerrado/nuevo-evento-cerrado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'mis-eventos/agenda', pathMatch: 'full' },

  { path: 'perfil', component: PerfilComponent },
  {
    path: 'mis-eventos',  component: MisEventosComponent,
    children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'organizados-por-mi', component: OrganizadosPorMiComponent,
      children: [
        { path: 'nuevo-evento-abierto', component: NuevoEventoAbiertoComponent },
        { path: 'nuevo-evento-cerrado', component: NuevoEventoCerradoComponent }
      ] },
      { path: 'pendientes', component: InvitacionesPendientesComponent }
    ]
  },


  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PerfilComponent];
