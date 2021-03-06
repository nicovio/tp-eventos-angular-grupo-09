import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { OrganizadosPorMiComponent } from './organizados-por-mi.component';
import { EventoService, StubEventoService } from 'src/app/servicios/evento.service';

describe('OrganizadosPorMiComponent', () => {
  let component: OrganizadosPorMiComponent
  let fixture: ComponentFixture<OrganizadosPorMiComponent>

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

    TestBed.overrideComponent(OrganizadosPorMiComponent, {
      set: {
        providers: [
          { provide: UsuarioService, useClass: StubUsuarioService },
          { provide: EventoService, useClass: StubEventoService }
        ]
      }
    })

    fixture = TestBed.createComponent(OrganizadosPorMiComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
