import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEventosComponent } from './sidebar-eventos.component';

describe('SidebarEventosComponent', () => {
  let component: SidebarEventosComponent;
  let fixture: ComponentFixture<SidebarEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
