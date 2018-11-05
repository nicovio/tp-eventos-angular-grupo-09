import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEventosComponent } from './lista-de-eventos.component';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('ListaDeEventosComponent', () => {
  let component: ListaDeEventosComponent
  let fixture: ComponentFixture<ListaDeEventosComponent>

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

    fixture = TestBed.createComponent(ListaDeEventosComponent)
    fixture.detectChanges()
    await fixture.whenStable()
    fixture.detectChanges()

    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
