import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationStudentComponent } from './information-student.component';

describe('InformationStudentComponent', () => {
  let component: InformationStudentComponent;
  let fixture: ComponentFixture<InformationStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
