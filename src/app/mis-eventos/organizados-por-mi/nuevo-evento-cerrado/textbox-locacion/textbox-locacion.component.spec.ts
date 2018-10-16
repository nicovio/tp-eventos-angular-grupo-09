import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxLocacionComponent } from './textbox-locacion.component';

describe('TextboxLocacionComponent', () => {
  let component: TextboxLocacionComponent;
  let fixture: ComponentFixture<TextboxLocacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxLocacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxLocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
