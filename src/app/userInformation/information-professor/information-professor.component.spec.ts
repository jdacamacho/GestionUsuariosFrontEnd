import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProfessorComponent } from './information-professor.component';

describe('InformationProfessorComponent', () => {
  let component: InformationProfessorComponent;
  let fixture: ComponentFixture<InformationProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
