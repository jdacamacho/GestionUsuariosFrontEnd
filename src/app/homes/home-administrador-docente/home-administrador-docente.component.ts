import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/Login.service';

@Component({
  selector: 'app-home-administrador-docente',
  templateUrl: './home-administrador-docente.component.html',
  styleUrl: './home-administrador-docente.component.css'
})
export class HomeAdministradorDocenteComponent implements OnInit{
  public userLoginOn : boolean = false;
  public roleAuthorize : boolean = false;

  constructor(private loginService: LoginService){

  }
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) =>{
        this.userLoginOn = userLoginOn;
      }
    });
  }




}
