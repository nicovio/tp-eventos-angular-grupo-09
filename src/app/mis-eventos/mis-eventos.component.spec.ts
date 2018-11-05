import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { UsuarioService, StubUsuarioService } from 'src/app/servicios/usuario.service';
import { MisEventosComponent } from './mis-eventos.component';

describe('MisEventosComponent', () => {
  let component: MisEventosComponent
  let fixture: ComponentFixture<MisEventosComponent>

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

    fixture = TestBed.createComponent(MisEventosComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
