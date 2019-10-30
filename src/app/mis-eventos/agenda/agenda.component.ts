import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/servicios/evento.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss'],
    providers: []
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