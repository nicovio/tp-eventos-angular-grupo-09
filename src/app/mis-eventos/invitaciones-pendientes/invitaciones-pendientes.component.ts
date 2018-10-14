import { Component, OnInit } from '@angular/core';
import { Invitacion } from 'src/app/domain/eventos/invitacion';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-invitaciones-pendientes',
  templateUrl: './invitaciones-pendientes.component.html',
  styleUrls: ['./invitaciones-pendientes.component.scss']
})
export class InvitacionesPendientesComponent implements OnInit {
  invitaciones: Array<Invitacion> 

  constructor(private usuarioService: MockUsuarioService) { 
    this.invitaciones = usuarioService.usuarioLogueado.invitaciones
  }

  ngOnInit() {
  }

}
