import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstudianteComponent } from './update-estudiante.component';

describe('UpdateEstudianteComponent', () => {
  let component: UpdateEstudianteComponent;
  let fixture: ComponentFixture<UpdateEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
