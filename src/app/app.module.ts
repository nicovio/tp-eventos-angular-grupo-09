import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PerfilModule } from 'src/app/perfil/perfil.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PerfilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
