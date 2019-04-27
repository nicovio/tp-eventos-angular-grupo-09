import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { AmigosComponent } from './amigos.component';

describe('AmigosComponent', () => {
  let component: AmigosComponent
  let fixture: ComponentFixture<AmigosComponent>


  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents()
    fixture = TestBed.createComponent(AmigosComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()
    component = fixture.componentInstance
  });

  TestBed.overrideComponent(AmigosComponent, {
    set: {
      providers: [
        { provide: UsuarioService, useClass: StubUsuarioService }
      ]
    }
  })



  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Tiene 6 amigos', () => {
    expect(component.amigosUsuario.length).toBe(6)
  })

  it('Nombre de amigo con id 1 es Fernando', () => {
    const resultHtml = fixture.debugElement.nativeElement
    const nombreApellido = resultHtml.querySelector('#nombre_1')
    expect(nombreApellido.textContent).toBe('Fernando')
  })

  it('Apellido de amigo con id 5 es White', () => {
    const resultHtml = fixture.debugElement.nativeElement
    const nombreApellido = resultHtml.querySelector('#apellido_5')
    expect(nombreApellido.textContent).toBe('White')
  })

  it('Username de amigo con id 3 es @theRedOne', () => {
    const resultHtml = fixture.debugElement.nativeElement
    const nombreApellido = resultHtml.querySelector('#username_3')
    expect(nombreApellido.textContent).toBe('@theRedOne')
  })

  it('Elimina a un amigo y pasa a tener 5 amigos', async () => {
    const resultHtml = fixture.debugElement.nativeElement
    resultHtml.querySelector('#eliminar_1').click()
    fixture.detectChanges()
    resultHtml.querySelector('#confirmar_eliminacion_1').click()
    await fixture.detectChanges()
    expect(component.amigosUsuario.length).toBe(5)
  })

})
