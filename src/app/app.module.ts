import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmigosComponent } from './perfil/amigos/amigos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UserImageComponent } from './perfil/user-image/user-image.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [AppComponent, routingComponents, PerfilComponent, NavbarComponent, UserImageComponent, AmigosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
