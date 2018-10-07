import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';


export const routes: Routes = [
  { path: '', redirectTo: '/mis-eventos', pathMatch: 'full' },
  // por defecto redirigimos al perfil
  { path: 'perfil', component: PerfilComponent },
  { path: 'mis-eventos', component: MisEventosComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [PerfilComponent];
