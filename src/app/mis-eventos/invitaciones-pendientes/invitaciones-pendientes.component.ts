import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/app/domain/eventos/invitacion';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';
import Usuario from 'src/app/domain/usuarios/usuario';

@Component({
  selector: 'app-invitaciones-pendientes',
  templateUrl: './invitaciones-pendientes.component.html',
  styleUrls: ['./invitaciones-pendientes.component.scss']
})
export class InvitacionesPendientesComponent{
    invitaciones: Array<Invitacion> 
  invitacionSeleccionada: Invitacion
  usuarioLogueado: Usuario

  constructor(private usuarioService: MockUsuarioService) { 
    this.invitaciones = usuarioService.usuarioLogueado.invitacionesPendientes()
    this.usuarioLogueado = usuarioService.usuarioLogueado
  }

  setInvitacionSeleccionada(invitacion: Invitacion){
    this.invitacionSeleccionada = invitacion
  }

  aceptarInvitacion(){
    this.invitacionSeleccionada.serAceptada
    this.usuarioLogueado.aceptarInvitacion(this.invitacionSeleccionada)
    this.eliminarInvitacion()
  }

  rechazarInvitacion(){
    this.invitacionSeleccionada.rechazar
    this.usuarioLogueado.rechazarInvitacion(this.invitacionSeleccionada)
    this.eliminarInvitacion()
  }

  eliminarInvitacion(){
    const index = this.invitaciones.indexOf(this.invitacionSeleccionada, 0);

        if (index > -1) {
            this.invitaciones.splice(index, 1);
        }
  } 
}
