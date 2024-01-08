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
export class NavBarAdmProfessorComponent{
  public professor:Professor = new Professor();

  constructor(private loginService:LoginService,
              private router:Router){
  }

  public listProfessors(){
    this.router.navigate(['/docentes']);
  }

  public createProfessor(){
    this.router.navigate(['docentes/create']);
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
