import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdministradorDocenteComponent } from './header-administrador-docente.component';

describe('HeaderAdministradorDocenteComponent', () => {
  let component: HeaderAdministradorDocenteComponent;
  let fixture: ComponentFixture<HeaderAdministradorDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderAdministradorDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAdministradorDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
