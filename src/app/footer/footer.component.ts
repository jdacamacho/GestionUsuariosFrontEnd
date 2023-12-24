import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public proyect : any = {year: '2023', nameProyect: 'Gestion Usuarios - Unicauca'};
  public tecnology : any ={leyenda: 'Web desarrollada con ', tec1: 'Angular', tec2:'Springboot'};
  public author: String = "Julian David Camacho Erazo"
}
