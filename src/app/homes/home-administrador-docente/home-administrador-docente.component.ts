import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/Login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Professor } from '../../docentes/Professor';
import { ProfessorService } from '../../docentes/professor.service';

@Component({
  selector: 'app-home-administrador-docente',
  templateUrl: './home-administrador-docente.component.html',
  styleUrl: './home-administrador-docente.component.css'
})
export class HomeAdministradorDocenteComponent implements OnInit{
  public professor : Professor = new Professor() ;
  public userLoginOn : boolean = false;
  private rolesWithAccess: string[] = ['ROLE_Administrador','ROLE_Docente'];

  constructor(private loginService: LoginService,
              private professorService: ProfessorService,
              private router: Router){

  }
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) =>{
        this.userLoginOn = userLoginOn;
      }
    })

    this.professorService.getProfessor(this.loginService.getCurrentIdUser).subscribe(
      (professor: Professor) => {
        this.professor = professor;
      }
    );
  }

  userHasAccess():boolean{
    return this.loginService.errorNotAccess(this.rolesWithAccess);
  }
}
