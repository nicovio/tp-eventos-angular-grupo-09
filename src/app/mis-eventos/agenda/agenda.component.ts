import { Component } from '@angular/core';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';
import { MockEventoService } from 'src/app/servicios/evento.service';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

    usuarioLogueado

    constructor(private eventoService: MockEventoService, private usuarioService: MockUsuarioService) {
        this.usuarioLogueado = usuarioService.usuarioLogueado;
    }

    eventosDeHoy() {
        return this.eventoService.eventosDeHoy(this.usuarioLogueado);
    }

    eventosDeEstaSemana() {
        return this.eventoService.eventosDeEstaSemana(this.usuarioLogueado);
    }

    eventosProximos() {
        return this.eventoService.eventosProximos(this.usuarioLogueado);

    }

}