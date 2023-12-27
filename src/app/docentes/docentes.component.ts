import { Component, OnInit } from '@angular/core';
import { Professor } from './Professor';
import { ProfessorService } from './professor.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/Login.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.css',
})
export class DocentesComponent implements OnInit {
  professors: Professor[] = [];
  public userLoginOn: boolean = false;
  private rolesWithAccess: string[] = ['ROLE_Administrador', 'ROLE_Docente'];

  constructor(
    private professorService: ProfessorService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
    });

    this.professorService
      .getProfessorsExclude(this.loginService.getCurrentIdUser)
      .subscribe((professors: Professor[]) => {
        this.professors = professors;
      });
  }

  userHasAccess():boolean{
    return this.loginService.errorNotAccess(this.rolesWithAccess);
  }
}
