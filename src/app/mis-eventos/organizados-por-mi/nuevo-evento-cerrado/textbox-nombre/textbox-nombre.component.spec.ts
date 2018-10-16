import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxNombreComponent } from './textbox-nombre.component';

describe('TextboxNombreComponent', () => {
  let component: TextboxNombreComponent;
  let fixture: ComponentFixture<TextboxNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxNombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
