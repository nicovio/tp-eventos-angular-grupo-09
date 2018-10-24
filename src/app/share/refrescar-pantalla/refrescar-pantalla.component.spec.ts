import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrescarPantallaComponent } from './refrescar-pantalla.component';

describe('RefrescarPantallaComponent', () => {
  let component: RefrescarPantallaComponent;
  let fixture: ComponentFixture<RefrescarPantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrescarPantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrescarPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
