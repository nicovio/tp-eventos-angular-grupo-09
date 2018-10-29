import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { NuevoEvento } from '../nuevo-evento';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { LocacionService } from 'src/app/servicios/locacion.service';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent extends NuevoEvento {
  IDUsuarioLogueado: Number
  errors = []

  constructor(serviceEvento: EventoService, router: Router, private usuarioService: UsuarioService, locacionService: LocacionService) {
    super(serviceEvento, router, locacionService);
    this.IDUsuarioLogueado = usuarioService.IDUsuarioLogueado
    this.nuevoEvento = new EventoAbierto();

  }


}
