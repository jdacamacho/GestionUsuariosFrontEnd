import { Component, OnInit } from '@angular/core';
import { credentionals } from './Credentionals';
import { login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public login : login = new login();
  public credentionals: credentionals = new credentionals();

  ngOnInit(): void {
    
  }

  public logIn(){
    console.log("invocando a login");
    console.log(this.login)
  }
}
