import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService, MockEventoService } from 'src/app/servicios/evento.service';
import EventoCerrado from 'src/app/domain/eventos/evento-cerrado';
import { NuevoEvento } from '../nuevo-evento';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';
import { mostrarError } from 'src/app/perfil/amigos/amigos.component';
import { LocacionService } from 'src/app/servicios/locacion.service';

@Component({
  selector: 'app-nuevo-evento-cerrado',
  templateUrl: './nuevo-evento-cerrado.component.html',
  styleUrls: ['./nuevo-evento-cerrado.component.scss']
})
export class NuevoEventoCerradoComponent extends NuevoEvento implements OnInit {

  IDUsuarioLogueado: Number
  eventoService

  constructor(serviceEvento: EventoService, private serviceUsuario: UsuarioService, router: Router, locacionService: LocacionService) {
    super(serviceEvento, router, locacionService);
    this.eventoService = serviceEvento
    this.IDUsuarioLogueado = serviceUsuario.IDUsuarioLogueado
    this.nuevoEvento = new EventoCerrado();
  }

  ngOnInit() {}

  noPuedeCrearEvento() {
    return (
      super.noPuedeCrearEvento() || this.fechaMaximaDeConfirmacionIncorrecta()
    );
  }

  fechaMaximaDeConfirmacionIncorrecta(){
    return this.nuevoEvento.fechaMaximaConfirmacion >= this.nuevoEvento.fechaHoraInicio;
  }

  async aceptar(idUsuarioLogueado: number) {
    try {
      await this.eventoService.crearEventoCerrado(idUsuarioLogueado, this.nuevoEvento);
    } catch (error) {
      mostrarError(this, error)
    }
    super.resfrescarPantalla();
  }


}
