import { Component } from '@angular/core';
import { StubUsuarioService, UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp-eventos-angular-grupo9';
}

export let usuarioService = new StubUsuarioService;


