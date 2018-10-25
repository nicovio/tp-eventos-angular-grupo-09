import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/app/domain/eventos/invitacion';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';
import Usuario from 'src/app/domain/usuarios/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitaciones-pendientes',
  templateUrl: './invitaciones-pendientes.component.html',
  styleUrls: ['./invitaciones-pendientes.component.scss']
})
export class InvitacionesPendientesComponent {
  invitacionSeleccionada: Invitacion
  IdUsuarioLogueado: Number
  IdInvitacionSeleccionada: Number
  invitacionesPendientes
  errors = []

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.IdUsuarioLogueado = usuarioService.IDUsuarioLogueado

    try {
      this.initialize()

    } catch (error) {
      this.errors.push(error._body)
    }

  }


  async initialize() {
    this.invitacionesPendientes = await this.usuarioService.getInvitacionesPendientes(this.IdUsuarioLogueado)
  }

  setInvitacionSeleccionada(invitacion: Invitacion) {
    this.IdInvitacionSeleccionada = invitacion.id
  }

  async aceptarInvitacion() {
    try {
      await this.usuarioService.aceptarInvitacion(this.IdUsuarioLogueado, this.IdInvitacionSeleccionada)
    } catch (e) {
      this.errors.push(e._body)
    }
    this.resfrescarPantalla()
  }


  async rechazarInvitacion() {
    try {
      await this.usuarioService.rechazarInvitacion(this.IdUsuarioLogueado, this.IdInvitacionSeleccionada)
    } catch (e) {
      this.errors.push(e._body)
    }
    this.resfrescarPantalla()
  }

  resfrescarPantalla() {
    this.router.navigateByUrl('/refrescar-pantalla', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/mis-eventos/pendientes"]));
  }

}
