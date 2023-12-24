import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public proyecto: any = {anio: '2023', nombreProyecto: 'Proyecto Gestion usuarios Unicauca'};
  public tecnologia: any = {leyenda: 'WebApp desarrollada con ', tec1: 'Angular ', tec2: 'Spring'};
  public autor: string = 'Julian Camacho Erazo';
}
