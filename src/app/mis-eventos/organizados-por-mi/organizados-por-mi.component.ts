import { Component } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss'],
  providers: [EventoService]
})
export class OrganizadosPorMiComponent {
  IDUsuarioLogueado: Number
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

  async initialize() {
    this.tipoUsuario = await this.serviceUsuario.getTipoDeUsuario(this.IDUsuarioLogueado)
    await this.serviceEvento.fetchAbiertosOrganizadosPorUsuario(this.IDUsuarioLogueado)
    await this.serviceEvento.fetchCerradosOrganizadosPorUsuario(this.IDUsuarioLogueado)
  }

}
