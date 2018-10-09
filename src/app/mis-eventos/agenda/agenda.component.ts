import { Component, OnInit, PipeTransform } from '@angular/core';
import { usuario } from 'src/app/app.component';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {

    usuarioEventos = usuario
    filtrosEventos = filtrosEventos
}

enum filtrosEventos {
    eventosDeHoy = 'Hoy',
    eventosEstaSemana = 'Esta Semana',
    eventosProximos = 'Próximos'
}
