import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';
import Usuario from 'src/app/domain/usuarios/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';


function mostrarError(component, error) {
  console.log("error", error)
  component.errors.push(error._body)
}

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


  // QUE TAL LA IDEA DE TENER UNA LISTA LOCAL DE EVENTOS QUE SEA POBLADA EN ESTE CONSTRUCTOR?
  // DADO QUE EL MODAL ES UN COMPONENTE, DEBERIA CREARSE UNO NUEVO CADA VEZ QUE LO ABRIS, 
  // CON LO CUAL ESTARIAS PEGANDOLE AL SERVER TODO EL TIEMPO. ESTO LO PODIAMOS VER CADA VEZ QUE
  // ABRIAMOS EL MODAL Y EN NgOnInit LE PEDIAMOS UN CONSOLE LOG NEW DATE()

  constructor(private serviceEvento: EventoService, private router: Router, private usuarioService: UsuarioService) {
    this.IDUsuarioLogueado = usuarioService.IDUsuarioLogueado
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }

  }


  ngOnInit() { }

  async initialize() {
    try {
      this.eventosOrganizadosAbiertos = await this.serviceEvento.abiertosOrganizadosPorUsuario(this.IDUsuarioLogueado)
      this.eventosOrganizadosCerrados = await this.serviceEvento.cerradosOrganizadosPorUsuario(this.IDUsuarioLogueado)
    } catch (error) {
      mostrarError(this, error)
    }
  }

}
