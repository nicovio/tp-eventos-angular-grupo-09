import { Component } from '@angular/core';
import Usuario from '../../../domain/usuario';
import {usuarioService}  from 'src/app/app.component';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent  {
  usuarioImage: Usuario

  constructor(){
    this.usuarioImage = usuarioService.getUsuarioByUsername('@kara95')
  }

}
