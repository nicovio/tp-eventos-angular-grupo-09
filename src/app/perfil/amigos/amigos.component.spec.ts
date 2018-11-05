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

    TestBed.overrideComponent(AmigosComponent, {
      set: {
        providers: [
          { provide: UsuarioService, useClass: StubUsuarioService }
        ]
      }
    })

    fixture = TestBed.createComponent(AmigosComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
