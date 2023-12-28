import { Component, OnInit } from '@angular/core';
import { Professor } from '../../docentes/Professor';
import { ProfessorService } from '../../docentes/professor.service';
import { LoginService } from '../../login/Login.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProfessorType } from '../../docentes/ProfessoType';
import { Role } from '../../docentes/Role';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrl: './update-professor.component.css',
})
export class UpdateProfessorComponent implements OnInit {
  public tittle: String = 'Actualizar docente';
  public professor: Professor = new Professor();
  public userLoginOn: boolean = false;
  public errores: string[] = [];
  private rolesWithAccess: string[] = ['ROLE_Administrador', 'ROLE_Docente'];
  public professorTypes: ProfessorType[] = [];
  public adm: Role = new Role();


  constructor(
    private professorService: ProfessorService,
    private loginService: LoginService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adm.idRole = 1;
    this.adm.name = 'ROLE_Administrador';

    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
    });

    this.activedRoute.params.subscribe((params) => {
      const idDocente = +params['idDocente'];
      this.professorService.getProfessor(idDocente).subscribe(
        (response) =>{
          this.professor = response;
        },
        (err) =>{
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error);
          Swal.fire('Error', 'Usuario no encontrado','error')
        }
      )
    });

    this.professorService.getTypeProfessors().subscribe((professorTypes) => {
      this.professorTypes = professorTypes;
    });

  }

  public confirmarGuardarCambios(): void {
    Swal.fire({
      title: '¿Estás seguro de guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, guardar cambios',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.updateProfessor();
      }
    });
  }

  public updateProfessor(): void {
    this.professorService
      .update(this.professor, this.professor.idUser)
      .subscribe(
        (response) => {
          this.router.navigate(['/docentes']);
          Swal.fire(
            'professor modificado',
            `´Professor ${response.names} actualizado con éxito!`,
            'success'
          );
        },
        (err) => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

  userHasAccess(): boolean {
    return this.loginService.errorNotAccess(this.rolesWithAccess);
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
