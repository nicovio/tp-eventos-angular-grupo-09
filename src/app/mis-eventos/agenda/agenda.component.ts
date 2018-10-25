import { Component } from '@angular/core';
import { MockUsuarioService, UsuarioService } from 'src/app/servicios/usuario.service';
import { MockEventoService, EventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import Evento from 'src/app/domain/eventos/evento';


@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
    eventosDeHoy
    eventosDeEstaSemana
    eventosProximos
    IdUsuarioLogueado
    errors = []

    constructor(private eventosService: EventoService, private usuarioService: UsuarioService, private router: Router) {
        this.IdUsuarioLogueado = usuarioService.IDUsuarioLogueado
        try {
            this.initialize()

        } catch (error) {
            this.errors.push(error._body)
        }
    }

    async initialize() {
        this.eventosDeHoy = await this.eventosService.eventosDeHoy(this.IdUsuarioLogueado)
        this.eventosDeEstaSemana = await this.eventosService.eventosDeEstaSemana(this.IdUsuarioLogueado)
        this.eventosProximos = await this.eventosService.eventosProximos(this.IdUsuarioLogueado)
    }
}