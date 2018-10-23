import { Component } from '@angular/core';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';
import { MockEventoService, EventoService } from 'src/app/servicios/evento.service';
import { Router } from '@angular/router';
import Evento from 'src/app/domain/eventos/evento';


@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

    usuarioLogueado
    errors = []

    constructor(private eventosService: EventoService, private mockEventoService: MockEventoService, private usuarioService: MockUsuarioService, private router: Router) {
        this.usuarioLogueado = usuarioService.usuarioLogueado;
    }

    eventosDeHoy() {
        return this.mockEventoService.eventosDeHoy(this.usuarioLogueado);
    }

    eventosDeEstaSemana() {
        return this.mockEventoService.eventosDeEstaSemana(this.usuarioLogueado);
    }

    eventosProximos() {
        return this.mockEventoService.eventosProximos(this.usuarioLogueado);

    }

    // async ngOnInit() {
    //     try {
    //         // Truco para que refresque la pantalla 
    //         this.router.routeReuseStrategy.shouldReuseRoute = () => false
    //         this.organizadosPorMi = await this.eventosService.organizadosPorUsuario('karaDanvers')
    //     } catch (error) {
    //         mostrarError(this, error)
    //     }
    // }

}