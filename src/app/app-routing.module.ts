import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { AgendaComponent } from './mis-eventos/agenda/agenda.component';
import { OrganizadosPorMiComponent } from './mis-eventos/organizados-por-mi/organizados-por-mi.component';
import { InvitacionesPendientesComponent } from './mis-eventos/invitaciones-pendientes/invitaciones-pendientes.component';


export const routes: Routes = [
  { path: '', redirectTo: 'mis-eventos/agenda', pathMatch: 'full' },

  { path: 'perfil', component: PerfilComponent },
  {
    path: 'mis-eventos', component: MisEventosComponent,
    children: [
      { path: 'agenda', component: AgendaComponent },
      { path: 'organizados-por-mi', component: OrganizadosPorMiComponent },
      { path: 'pendientes', component: InvitacionesPendientesComponent }
    ]
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PerfilComponent];
