import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NuevoEventoAbiertoComponent } from './nuevo-evento-abierto/nuevo-evento-abierto.component';


@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss'],
})
export class OrganizadosPorMiComponent implements AfterViewInit{
  @ViewChild(NuevoEventoAbiertoComponent)
  eventoAbiertoCreado: NuevoEventoAbiertoComponent
  
  ngAfterViewInit() {
    this.eventoAbiertoCreado.abrirModal
  }
}

