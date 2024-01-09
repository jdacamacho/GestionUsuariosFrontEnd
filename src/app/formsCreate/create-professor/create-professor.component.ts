import { Component, OnInit } from '@angular/core';
import { Professor } from '../../docentes/Professor';
import { ProfessorType } from '../../docentes/ProfessoType';
import { ProfessorService } from '../../docentes/professor.service';
import { LoginService } from '../../login/Login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Role } from '../../docentes/Role';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrl: './create-professor.component.css'
})
export class CreateProfessorComponent implements OnInit{
  public tittle: String = 'Actualizar docente';
  public professor: Professor = new Professor();
  public userLoginOn: boolean = false;
  public errores: string[] = [];
  private rolesWithAccess: string[] = ['ROLE_Administrador', 'ROLE_Docente'];
  public professorTypes: ProfessorType[] = [];
  public adm:Role = new Role();

  constructor(
    private professorService: ProfessorService,
    private loginService: LoginService,
    private router:Router
  ) {}

  ngOnInit(): void {

    this.adm.idRole = 1;
    this.adm.name = 'ROLE_Administrador';

    this.professor.state = 'Habilitado';
    
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
    });

    if(this.loginService.getCurrentIdUser != 0){
      this.professorService.getTypeProfessors().subscribe((professorTypes) => {
        this.professorTypes = professorTypes;
      });
    }

    this.userErrorPage();

  }

  public createProfessor(): void {
    let professor = new Role();
    professor.idRole = 2;
    professor.name = 'ROLE_Docente';
    this.professor.roles.push(professor);

    this.professorService
      .create(this.professor)
      .subscribe(
        (response) => {
          this.router.navigate(['/homeAdmDocente']);
          Swal.fire(
            'professor creado',
            `´Professor ${response.names} creado con éxito!`,
            'success'
          );
        },
        (err) => {
          this.errores = err.error.split(',');
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error);
        }
      );
  }

  userErrorPage():void{
    if(!this.userLoginOn && this.professor == null ){
      if(!this.userLoginOn){
        this.router.navigate(['error']);
        if(!this.loginService.errorNotAccess(this.rolesWithAccess)){
          this.router.navigate(['error/accessDenied']);
        }
      }
    }
  }

  toggleState() {
    this.professor.state =
      this.professor.state === 'Habilitado' ? 'Inhabilitado' : 'Habilitado';
  }

  toggleCheckbox(): void {
    if (this.hasRole()) {
      this.deleteAdministradorRole();
    } else {
      this.addAdministradorRole();
    }
  }

  hasRole(): boolean {
    let flagResponse = this.professor.roles.find(
      (role) => role.idRole === this.adm.idRole
    );
    return !!flagResponse;
  }

  addAdministradorRole(): void {
    this.professor.roles.push(this.adm);
  }

  deleteAdministradorRole(): void {
    let index = this.professor.roles.findIndex(
      (role) => role.idRole === this.adm.idRole
    );
    this.professor.roles.splice(index, 1);
  }


  compararProfessorsType(o1: ProfessorType, o2: ProfessorType): boolean {
    let bandera: boolean;
    if (o1 == undefined && o2 == undefined) {
      bandera = true;
    } else if (o1 == null || o2 == null || o1 == undefined || o2 == undefined) {
      bandera = false;
    } else if (o1.idProfessorType == o2.idProfessorType) {
      bandera = true;
    } else {
      bandera = false;
    }
    return bandera;
  }
}
