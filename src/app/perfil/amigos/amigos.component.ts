import { Component } from '@angular/core';
import { usuario } from 'src/app/app.component';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss']
})
export class AmigosComponent {
  usuarioAmigos = usuario
}