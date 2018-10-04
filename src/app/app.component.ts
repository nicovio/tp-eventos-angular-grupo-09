import { Component, OnInit } from '@angular/core';
import Usuario from 'src/domain/usuario';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tp-eventos-angular-grupo9';

  usuario = new Usuario('Kara', 'Danvers', '@kara95');
  usuarioService
  
  constructor(private servicioUsuario: UsuarioService){
    this.usuarioService = servicioUsuario
  }

  ngOnInit() {
    this.usuario.tipoDeUsuario = 'Profesional';
    this.usuario.email = 'kara@catco.com';
    this.usuario.agregarAmigo(new Usuario('Timothy', 'Drake', '@theRedOne'));
    this.usuario.agregarAmigo(new Usuario('Catherine', 'Grant', '@catGrant'));
    this.usuario.agregarAmigo(new Usuario('Perry', 'White', '@whiteDP'));
    this.usuario.agregarAmigo(new Usuario('James', 'Gordon', '@jimG'));
    this.usuario.agregarAmigo(new Usuario('James', 'Olsen', '@jimmy_olsn'));
    this.usuario.agregarAmigo(new Usuario('Katherine', 'Kane', '@kathyKane'));
    this.usuario.agregarAmigo(new Usuario('Julia', 'Pennyworth', '@JuliiPen'));
    this.usuario.agregarAmigo(new Usuario('Jackson', 'Hyde', '@JHyde'));
    this.usuario.agregarAmigo(new Usuario('Maravilla', 'Martinez', '@SaliDeAhiMaravilla'));
    this.usuario.agregarAmigo(new Usuario('Marcelo', 'Tinelli', '@marcelotinelli'));
    this.usuario.agregarAmigo(new Usuario('Carolina', 'Ardohain ', '@pampitaoficial '));
    this.usuario.agregarAmigo(new Usuario('Sean', 'Penn', '@elmachopenn'));
    this.usuario.agregarAmigo(new Usuario('Jennifer', 'Lawrence', '@JSLawrence'));
    this.usuario.agregarAmigo(new Usuario('Carlos', 'Gardel', '@carlitosgardel'));
    this.usuario.agregarAmigo(new Usuario('Lady', 'Gaga', '@ladygaga'));
    this.usuario.agregarAmigo(new Usuario('Fernando', 'Dodino', '@dodain'));
    this.usuarioService.agregarUsuario(this.usuario)

  }



}
