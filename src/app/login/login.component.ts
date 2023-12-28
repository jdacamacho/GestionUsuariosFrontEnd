import { Component, OnInit } from '@angular/core';
import { credentionals } from './Credentionals';
import { login } from './Login';
import { Router } from '@angular/router';
import { LoginService } from './Login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public login : login = new login();
  public credentionals: credentionals = new credentionals();
  public errores : string[] = [];

  constructor(private loginService : LoginService, private router: Router) {}
  
  ngOnInit(): void {
    
  }

  public logIn(){
    
    this.loginService.login(this.login).subscribe(
      (response) =>{
        let roleView = this.getEnumRole(response.access)        
        this.redirectHome(roleView,response.username);
      },
      (err) => {
        this.errores = err.error.split(',');
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error);
        Swal.fire('Error', 'ingrese las credenciales correctas','error')
      }
    );
  }

  private redirectHome(roleView :string, username : string){
    if(roleView == "Docente"){
      this.router.navigate(['/homeDocente']);
      Swal.fire(
        "Bienvenido: ",username
      );
    }else if(roleView == "Administrador"){

      this.router.navigate(['/homeAdm']);
      Swal.fire(
        "Bienvenido: ",username
      );
    }else if(roleView == "Estudiante"){
      this.router.navigate(['/homeEstudiante']);
      Swal.fire(
        "Bienvenido: ",username
      );
    }else if(roleView == "AdministradorDocente"){
      this.router.navigate(['/homeAdmDocente']);
      Swal.fire(
        "Bienvenido: ",username
      )
    }
  }

  private getEnumRole(roles : String[]){
    let roleResponse = "RoleNoValid";
    if(roles && roles.length>0){
      for(let i = 0 ; i < roles.length ; i++){
        if(roles[i] == "ROLE_Estudiante"){
          return "Estudiante";
        }else if(roles[i] == "ROLE_Administrador"){
          if(roleResponse == "Docente"){
            return "AdministradorDocente"; 
          }
          roleResponse = "Administrador"
        }else if(roles[i] == "ROLE_Docente"){
          if(roleResponse == "Administrador"){
            return "AdministradorDocente"; 
          }
          roleResponse = "Docente"
        }
      }
    }
    return roleResponse;
  }
}