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
  usuarioLogueado: Usuario

  constructor(private usuarioService: MockUsuarioService) { 
    this.invitaciones = usuarioService.usuarioLogueado.invitacionesPendientes()
    this.usuarioLogueado = usuarioService.usuarioLogueado
  }

  aceptarInvitacion(invitacionPorAceptar: Invitacion){
    invitacionPorAceptar.serAceptada
    this.usuarioLogueado.aceptarInvitacion(invitacionPorAceptar)
    this.eliminarInvitacion(invitacionPorAceptar)
  }

  rechazarInvitacion(invitacionPorRechazar: Invitacion){
    invitacionPorRechazar.rechazar
    this.usuarioLogueado.rechazarInvitacion(invitacionPorRechazar)
    this.eliminarInvitacion(invitacionPorRechazar)
  }

  eliminarInvitacion(invitacion: Invitacion){
    const index = this.invitaciones.indexOf(invitacion, 0);

        if (index > -1) {
            this.invitaciones.splice(index, 1);
        }
  } 
}
