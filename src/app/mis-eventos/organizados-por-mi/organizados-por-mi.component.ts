import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import TipoUsuario from 'src/app/domain/usuarios/tipo-de-usuario';
import Locacion from 'src/app/domain/eventos/locacion';
import { LocacionService } from 'src/app/servicios/locacion.service';
import Evento from 'src/app/domain/eventos/evento';


@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss'],
  providers: [UsuarioService, EventoService]

})
export class OrganizadosPorMiComponent implements OnInit {

  IDUsuarioLogueado: Number
  eventosOrganizadosAbiertos
  eventosOrganizadosCerrados
  errors = []
  locaciones: Array<Locacion>
  todosLosEventos: Array<Evento>
  tipoUsuario: TipoUsuario


  // QUE TAL LA IDEA DE TENER UNA LISTA LOCAL DE EVENTOS QUE SEA POBLADA EN ESTE CONSTRUCTOR?
  // DADO QUE EL MODAL ES UN COMPONENTE, DEBERIA CREARSE UNO NUEVO CADA VEZ QUE LO ABRIS, 
  // CON LO CUAL ESTARIAS PEGANDOLE AL SERVER TODO EL TIEMPO. ESTO LO PODIAMOS VER CADA VEZ QUE
  // ABRIAMOS EL MODAL Y EN NgOnInit LE PEDIAMOS UN CONSOLE LOG NEW DATE()

  constructor(private serviceEvento: EventoService, private router: Router, private serviceUsuario: UsuarioService, private locacionService: LocacionService) {
    this.IDUsuarioLogueado = serviceUsuario.IDUsuarioLogueado
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }

  }

  ngOnInit() {
  }

  async initialize() {
    this.tipoUsuario = await this.serviceUsuario.getTipoDeUsuario(this.IDUsuarioLogueado)
    this.eventosOrganizadosAbiertos = await this.serviceEvento.abiertosOrganizadosPorUsuario(this.IDUsuarioLogueado)
    this.eventosOrganizadosCerrados = await this.serviceEvento.cerradosOrganizadosPorUsuario(this.IDUsuarioLogueado)
    this.locaciones = await this.locacionService.locaciones()
    this.todosLosEventos = this.eventosOrganizadosAbiertos.concat(this.eventosOrganizadosCerrados)
  }

}
