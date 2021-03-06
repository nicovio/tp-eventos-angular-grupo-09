import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import { NuevoEvento } from '../nuevo-evento';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';
import { LocacionService } from 'src/app/servicios/locacion.service';

@Component({
  selector: 'app-nuevo-evento-cerrado',
  templateUrl: './nuevo-evento-cerrado.component.html',
  styleUrls: ['./nuevo-evento-cerrado.component.scss']
})
export class NuevoEventoCerradoComponent extends NuevoEvento {

  constructor(serviceEvento: EventoService, router: Router, serviceUsuario: UsuarioService, locacionService: LocacionService) {
    super(serviceEvento, router, serviceUsuario, locacionService);
    this.nuevoEvento = new EventoCerrado();
  }

  async aceptar(idUsuarioLogueado: number) {
    try {
      await this.serviceUsuario.crearEventoCerrado(idUsuarioLogueado, this.nuevoEvento);
      this.serviceEvento.nuevoEventoCerrado(this.nuevoEvento);
      this.volverAOrganizadosPorMi()
    } catch (error) {
      mostrarError(this, error)
    }
  }

  noPuedeCrearEventoCerrado() {
    return super.noPuedeCrearEvento() || this.fechaMaximaSuperaInicio() || this.noPusoFechaMaxima()
  }

  fechaMaximaSuperaInicio() {
    return this.nuevoEvento.fechaMaximaConfirmacion && this.nuevoEvento.fechaMaximaConfirmacion >= this.nuevoEvento.fechaHoraInicio;
  }

  noPusoFechaMaxima() {
    return !this.nuevoEvento.fechaMaximaConfirmacion
  }

}
