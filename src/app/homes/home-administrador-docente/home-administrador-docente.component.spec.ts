import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministradorDocenteComponent } from './home-administrador-docente.component';

describe('HomeAdministradorDocenteComponent', () => {
  let component: HomeAdministradorDocenteComponent;
  let fixture: ComponentFixture<HomeAdministradorDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAdministradorDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAdministradorDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
