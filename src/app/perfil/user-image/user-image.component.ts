import { Component, OnInit, Input } from '@angular/core';
import Usuario from '../../../domain/usuario';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent {
  @Input() usuarioImage: Usuario

  constructor() { }

}
