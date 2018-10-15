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
  invitacionSeleccionada: Invitacion
  usuarioLogueado: Usuario

  constructor(private usuarioService: MockUsuarioService) { 
    this.usuarioLogueado = usuarioService.usuarioLogueado
  }

  setInvitacionSeleccionada(invitacion: Invitacion){
    this.invitacionSeleccionada = invitacion
  }

  aceptarInvitacion(){
    this.invitacionSeleccionada.serAceptada
    this.usuarioLogueado.aceptarInvitacion(this.invitacionSeleccionada)
  }

  rechazarInvitacion(){
    this.invitacionSeleccionada.rechazar
    this.usuarioLogueado.rechazarInvitacion(this.invitacionSeleccionada)
  }

}
