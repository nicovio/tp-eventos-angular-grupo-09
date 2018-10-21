import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import Locacion from 'src/app/domain/eventos/locacion';
import { NuevoEvento } from '../nuevo-evento';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent extends NuevoEvento implements OnInit {
  constructor(serviceEvento: EventoService, router: Router) {
    super(serviceEvento, router);

    this.nuevoEvento = new EventoAbierto();
    this.nuevoEvento.locacion = new Locacion();
  }

  ngOnInit() {}
}
