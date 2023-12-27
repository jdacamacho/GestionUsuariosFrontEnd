import { Component, OnInit } from '@angular/core';
import { Professor } from './Professor';
import { ProfessorService } from './professor.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/Login.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.css'
})
export class DocentesComponent implements OnInit {

  professors : Professor[] = [];

  constructor(private professorService: ProfessorService,
              private loginService:LoginService){}

  ngOnInit(): void {
    this.professorService.getProfessorsExclude(this.loginService.getCurrentIdUser).subscribe(
      (professors: Professor[]) => {
        this.professors = professors;
      }
    );
  }

}
