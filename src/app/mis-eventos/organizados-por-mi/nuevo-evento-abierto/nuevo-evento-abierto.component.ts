import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import EventoAbierto from 'src/app/domain/eventos/evento-abierto';
import { NuevoEvento } from '../nuevo-evento';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { LocacionService } from 'src/app/servicios/locacion.service';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';

@Component({
  selector: 'app-nuevo-evento-abierto',
  templateUrl: './nuevo-evento-abierto.component.html',
  styleUrls: ['./nuevo-evento-abierto.component.scss'],
  providers: [UsuarioService, EventoService, LocacionService]
  
})
export class NuevoEventoAbiertoComponent extends NuevoEvento {
  errors = []
  servicioUsuario

  constructor(serviceEvento: EventoService, router: Router, serviceUsuario: UsuarioService, locacionService: LocacionService) {
    super(serviceEvento, router, serviceUsuario, locacionService);
    this.servicioUsuario = serviceUsuario
    this.nuevoEvento = new EventoAbierto();

  }

  async aceptar(idUsuarioLogueado: number) {
    try {
      await this.servicioUsuario.crearEventoAbierto(idUsuarioLogueado, this.nuevoEvento);
    } catch (error) {
      mostrarError(this, error)
    }
    this.resfrescarPantalla();
  }


}
