import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Invitacion } from 'src/app/domain/eventos/invitacion';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-invitaciones-pendientes',
  templateUrl: './invitaciones-pendientes.component.html',
  styleUrls: ['./invitaciones-pendientes.component.scss'],
  providers: []
})
export class InvitacionesPendientesComponent {
  IdUsuarioLogueado: Number
  invitacionSeleccionada: Invitacion
  cantidadAcompaniantes: Number
  invitacionesPendientes: Invitacion[]
  errors = []
  maximoAcompaniantes

  cantidadAcompaniantesFormControl = new FormControl('', [
    Validators.max(this.maximoAcompaniantes)
  ]);

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
    this.invitacionSeleccionada = invitacion
  }

  async aceptarInvitacion() {
    try {
      await this.usuarioService.aceptarInvitacion(this.IdUsuarioLogueado, this.invitacionSeleccionada.id, this.cantidadAcompaniantes)
      this.removerInvitacion()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async rechazarInvitacion() {
    try {
      await this.usuarioService.rechazarInvitacion(this.IdUsuarioLogueado, this.invitacionSeleccionada.id)
      this.removerInvitacion()
    } catch (e) {
      this.errors.push(e._body)
    }
  }

  removerInvitacion() {
    this.invitacionesPendientes = this.invitacionesPendientes.filter(invitacion => invitacion.id != this.invitacionSeleccionada.id)
  }

  noPuedeAceptar(maximo: Number) {
    return this.cantidadAcompaniantes > maximo || !this.cantidadAcompaniantes || this.cantidadAcompaniantes < 0
  }

}
