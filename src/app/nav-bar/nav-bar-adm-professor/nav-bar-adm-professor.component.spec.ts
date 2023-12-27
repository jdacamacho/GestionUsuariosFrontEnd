import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAdmProfessorComponent } from './nav-bar-adm-professor.component';

describe('NavBarAdmProfessorComponent', () => {
  let component: NavBarAdmProfessorComponent;
  let fixture: ComponentFixture<NavBarAdmProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarAdmProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarAdmProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
