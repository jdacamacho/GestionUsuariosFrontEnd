import { Component, OnInit } from '@angular/core';
import { Professor } from './Professor';
import { ProfessorService } from './professor.service';
import { LoginService } from '../login/Login.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  professors: Professor[] = [];
  public userLoginOn: boolean = false;
  private rolesWithAccess: string[] = ['ROLE_Administrador', 'ROLE_Docente'];
  pageSize: number = 4;
  pageIndex: number = 0;
  totalProfessors: number = 0;
  paginatedProfessors: Professor[] = [];

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
        this.totalProfessors = professors.length;
        this.updateProfessorsForPage();
      });
  }

  userHasAccess(): boolean {
    return this.loginService.errorNotAccess(this.rolesWithAccess);
  }

  cambiarPagina(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.updateProfessorsForPage();
  }

  updateProfessorsForPage() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProfessors = this.professors.slice(startIndex, endIndex);
  }
}