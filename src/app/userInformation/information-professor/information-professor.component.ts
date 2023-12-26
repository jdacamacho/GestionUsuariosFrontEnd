import { Component, OnInit } from '@angular/core';
import { Professor } from '../../docentes/Professor';
import { ProfessorService } from '../../docentes/professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-professor',
  templateUrl: './information-professor.component.html',
  styleUrl: './information-professor.component.css'
})
export class InformationProfessorComponent implements OnInit {
  
  currentUser : Professor = new Professor();

  constructor(private professorService: ProfessorService,router: Router){}
  
  ngOnInit(): void {
    this.professorService.getProfessor().subscribe(
      (Professor: Professor) => {  
        this.currentUser = Professor;
      }
    );
  }
}
