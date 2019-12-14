import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-eventos',
  templateUrl: './sidebar-eventos.component.html',
  styleUrls: ['./sidebar-eventos.component.scss']
})
export class SidebarEventosComponent implements OnInit {

  opcionSeleccionada: String = ""

  constructor() { }

  ngOnInit() {
  }

  seleccionarOpcion(opcion) {
    this.opcionSeleccionada = opcion
  }

  seleccionado(opcion) {
   return opcion == this.opcionSeleccionada
  }

}
