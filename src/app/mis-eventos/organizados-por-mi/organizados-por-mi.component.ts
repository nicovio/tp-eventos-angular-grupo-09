import { Component } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-organizados-por-mi',
  templateUrl: './organizados-por-mi.component.html',
  styleUrls: ['./organizados-por-mi.component.scss']
})
export class OrganizadosPorMiComponent {
  constructor(serviceEvento: EventoService) {}

}
