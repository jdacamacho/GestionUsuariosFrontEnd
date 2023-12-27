import { Component, OnInit } from '@angular/core';
import { Professor } from '../../docentes/Professor';
import { LoginService } from '../../login/Login.service';
import { ProfessorService } from '../../docentes/professor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nav-bar-adm-professor',
  templateUrl: './nav-bar-adm-professor.component.html',
  styleUrl: './nav-bar-adm-professor.component.css'
})
export class NavBarAdmProfessorComponent implements OnInit{
  public professor:Professor = new Professor();

  constructor(private loginService:LoginService,
              private professorService:ProfessorService,
              private router:Router){

  }

  ngOnInit(): void {
    this.professorService.getProfessor(this.loginService.getCurrentIdUser).subscribe(
      (professor) =>{
        this.professor = professor;
      }
    );
  }

  public listProfessors(){
    this.router.navigate(['/docentes']);
  }

  public redirectHome(){
    this.router.navigate(['/homeAdmDocente']);
  }

  public logOut(){
    this.loginService.logout();
    this.router.navigate(['/auth']);
    Swal.fire('Cerrando session...');
  }


}
