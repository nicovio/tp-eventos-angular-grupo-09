import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


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
  tipoUsuario
  errors = []

  constructor(private serviceEvento: EventoService, private serviceUsuario: UsuarioService) {
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
  }

}
