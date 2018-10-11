import { Component } from '@angular/core';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

    constructor(private usuarioService: MockUsuarioService) {
    }

    eventosDeHoy() {
        return this.usuarioService.eventosDeHoy()
    }

    eventosDeEstaSemana() {
        return this.usuarioService.eventosDeEstaSemana()
    }

    eventosProximos() {
         return this.usuarioService.eventosProximos()

    }

}