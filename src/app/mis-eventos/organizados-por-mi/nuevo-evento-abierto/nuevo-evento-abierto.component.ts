import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService, MockEventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import Locacion from 'src/app/domain/eventos/locacion';
import { NuevoEvento } from '../nuevo-evento';
import { UsuarioService, MockUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss']
})
export class NuevoEventoAbiertoComponent extends NuevoEvento implements OnInit {

  errors = []

  constructor(serviceEvento: MockEventoService, serviceUsuario: MockUsuarioService,router: Router) {
    super(serviceEvento, router);

    this.nuevoEvento = new EventoAbierto();
    this.nuevoEvento.locacion = new Locacion();
    this.nuevoEvento.organizador = serviceUsuario.usuarioLogueado

  }

  ngOnInit() {}
}
