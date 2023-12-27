import { Component, OnInit } from '@angular/core';
import { Professor } from '../../docentes/Professor';
import { ProfessorService } from '../../docentes/professor.service';
import { LoginService } from '../../login/Login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrl: './update-professor.component.css'
})
export class UpdateProfessorComponent implements OnInit {
  public professor:Professor = new Professor();
  public userLoginOn: boolean = false;
  public errores: string[] = [];

  constructor(private professorService:ProfessorService,
              private loginService:LoginService,
              private router : Router){

  }
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) =>{
        this.userLoginOn = userLoginOn;
      }
    })

    this.professorService.getProfessor(this.loginService.getCurrentIdUser).subscribe(
      (professor) =>{
        this.professor = professor;
      }
    );
  }

  public updateProfessor():void{
    this.professorService.update(this.professor,this.professor.idUser).subscribe(
      (response) =>{
        this.router.navigate(['/homeAdmDocente']);
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
    )
  }


   

}
