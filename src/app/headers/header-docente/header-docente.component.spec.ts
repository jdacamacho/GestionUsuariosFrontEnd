import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDocenteComponent } from './header-docente.component';

describe('HeaderDocenteComponent', () => {
  let component: HeaderDocenteComponent;
  let fixture: ComponentFixture<HeaderDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
