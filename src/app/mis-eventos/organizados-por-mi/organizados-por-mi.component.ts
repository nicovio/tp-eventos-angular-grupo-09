import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';
import Usuario from 'src/app/domain/usuarios/usuario';
import { Router } from '@angular/router';


function mostrarError(component, error) {
  console.log("error", error)
  component.errors.push(error._body)
}

@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss']
})
export class OrganizadosPorMiComponent implements OnInit {
  usuarioLogueado: Usuario;
  eventosOrganizadosAbiertos
  eventosOrganizadosCerrados
  errors = []


  // QUE TAL LA IDEA DE TENER UNA LISTA LOCAL DE EVENTOS QUE SEA POBLADA EN ESTE CONSTRUCTOR?
  // DADO QUE EL MODAL ES UN COMPONENTE, DEBERIA CREARSE UNO NUEVO CADA VEZ QUE LO ABRIS, 
  // CON LO CUAL ESTARIAS PEGANDOLE AL SERVER TODO EL TIEMPO. ESTO LO PODIAMOS VER CADA VEZ QUE
  // ABRIAMOS EL MODAL Y EN NgOnInit LE PEDIAMOS UN CONSOLE LOG NEW DATE()

  constructor(private serviceEvento: EventoService, private router: Router) {
    try {
      this.initialize()
    } catch (error) {
      this.errors.push(error._body)
    }

    // this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }


  ngOnInit() { }

  async initialize() {
    try {
      this.eventosOrganizadosAbiertos = await this.serviceEvento.abiertosOrganizadosPorUsuario('karaDanvers')
      this.eventosOrganizadosCerrados = await this.serviceEvento.cerradosOrganizadosPorUsuario('karaDanvers')
    } catch (error) {
      mostrarError(this, error)
    }
  }

}
