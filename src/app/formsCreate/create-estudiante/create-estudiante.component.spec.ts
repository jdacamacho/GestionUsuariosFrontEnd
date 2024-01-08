import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstudianteComponent } from './create-estudiante.component';

describe('CreateEstudianteComponent', () => {
  let component: CreateEstudianteComponent;
  let fixture: ComponentFixture<CreateEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
