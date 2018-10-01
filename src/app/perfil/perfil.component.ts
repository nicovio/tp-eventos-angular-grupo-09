import Usuario from "src/domain/usuario"
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']

})

export class PerfilComponent implements OnInit {
    title = 'perfil';
    usuario = new Usuario("Kara", "Danvers", "@kara95")
    amigos = this.usuario.amigos

    ngOnInit() {
        this.usuario.tipoDeUsuario = "Profesional"
        this.usuario.email = "kara@catco.com"
        this.usuario.agregarAmigo(new Usuario("Timothy", "Drake", "@theRedOne"));
        this.usuario.agregarAmigo(new Usuario("Catherine", "Grant", "@catGrant"));
        this.usuario.agregarAmigo(new Usuario("Perry", "White", "@whiteDP"));
        this.usuario.agregarAmigo(new Usuario("James", "Gordon", "@jimG"));
        this.usuario.agregarAmigo(new Usuario("James", "Olsen", "@jimmy_olsn"));
        this.usuario.agregarAmigo(new Usuario("Katherine", "Kane", "@kathyKane"));
        this.usuario.agregarAmigo(new Usuario("Julia", "Pennyworth", "@JuliiPen"));
        this.usuario.agregarAmigo(new Usuario("Jackson", "Hyde", "@JHyde"));
    }
}




