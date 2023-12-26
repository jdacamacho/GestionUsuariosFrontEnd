import { Component, OnInit } from '@angular/core';
import { Professor } from './Professor';
import { ProfessorService } from './professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrl: './docentes.component.css'
})
export class DocentesComponent implements OnInit {

  professors : Professor[] = [];

  constructor(private professorService: ProfessorService,router: Router){}

  ngOnInit(): void {
    this.professorService.getProfessors().subscribe(
      (professors: Professor[]) => {
        this.professors = professors;
      }
    );
  }

}
