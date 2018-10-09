import { Component } from '@angular/core';
import { StubUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-eventos-angular-grupo9';
}

let usuarioService = new StubUsuarioService
export let usuario = usuarioService.getUsuarioByUsername('@kara95')
