import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService, MockEventoService } from 'src/app/servicios/evento.service';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import { NuevoEvento } from '../nuevo-evento';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';
import { LocacionService } from 'src/app/servicios/locacion.service';
import TipoUsuario from 'src/app/domain/usuarios/tipo-de-usuario';
import Evento from 'src/app/domain/eventos/evento';

@Component({
  selector: 'app-nuevo-evento-cerrado',
  templateUrl: './nuevo-evento-cerrado.component.html',
  styleUrls: ['./nuevo-evento-cerrado.component.scss']
})
export class NuevoEventoCerradoComponent extends NuevoEvento implements OnInit {

  IDUsuarioLogueado: Number
  usuarioService


  constructor(serviceEvento: EventoService, router: Router, serviceUsuario: UsuarioService, locacionService: LocacionService) {
    super(serviceEvento, router, serviceUsuario, locacionService);
    this.IDUsuarioLogueado = serviceUsuario.IDUsuarioLogueado
    this.nuevoEvento = new EventoCerrado();
    this.usuarioService = serviceUsuario

  }


  async aceptar(idUsuarioLogueado: number) {
    try {
      await this.servicioUsuario.crearEventoCerrado(idUsuarioLogueado, this.nuevoEvento);
    } catch (error) {
      mostrarError(this, error)
    }
    this.resfrescarPantalla();
  }

  noPuedeCrearEventoCerrado() {
    return super.noPuedeCrearEvento() || this.fechaMaximaDeConfirmacionIncorrecta()
  }

  fechaMaximaDeConfirmacionIncorrecta() {
    return this.nuevoEvento.fechaMaximaConfirmacion >= this.nuevoEvento.fechaHoraInicio;
  }


}
