import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  // por defecto redirigimos al perfil
  { path: 'perfil', component: PerfilComponent },
  // { path: 'mis-eventos', component: MisEventosComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [PerfilComponent];
