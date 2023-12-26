import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/Login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-administrador-docente',
  templateUrl: './home-administrador-docente.component.html',
  styleUrl: './home-administrador-docente.component.css'
})
export class HomeAdministradorDocenteComponent implements OnInit{
  public userLoginOn : boolean = false;
  public roleAuthorize : boolean = false;

  constructor(private loginService: LoginService, private router: Router){

  }
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) =>{
        this.userLoginOn = userLoginOn;
      }
    });
  }

  public logOut(){
    this.loginService.logout();
    this.router.navigate(['/auth']);
    Swal.fire('Cerrando session...');
  }






}
