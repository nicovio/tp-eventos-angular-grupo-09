import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { EventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss'],
    providers: [UsuarioService,EventoService]
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