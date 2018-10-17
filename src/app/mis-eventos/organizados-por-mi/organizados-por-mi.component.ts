import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss']
})
export class OrganizadosPorMiComponent {
  estadoEventoAbierto: boolean = false

  nuevoEventoAbiertoActivo(){
    this.estadoEventoAbierto = !this.estadoEventoAbierto
  }
}

