import { Component } from '@angular/core';
import { MockUsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent {
  
  usuarioAmigos

  constructor(private usuarioService: MockUsuarioService){
    this.usuarioAmigos = usuarioService.usuarioLogueado
  }
}