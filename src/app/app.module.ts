import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLoginComponent } from './headers/header-login/header-login.component';
import { HeaderAdministradorComponent } from './headers/header-administrador/header-administrador.component';
import { HeaderEstudianteComponent } from './headers/header-estudiante/header-estudiante.component';
import { HeaderDocenteComponent } from './headers/header-docente/header-docente.component';
import { HomeAdministradorComponent } from './homes/home-administrador/home-administrador.component';
import { HomeDocenteComponent } from './homes/home-docente/home-docente.component';
import { HomeEstudianteComponent } from './homes/home-estudiante/home-estudiante.component';
import { FormsModule } from '@angular/forms';


const routes : Routes= [
  {path : '' ,  redirectTo: '/auth' , pathMatch: 'full'},
  {path: 'auth', component: LoginComponent },
  {path : 'homeAdm', component:HomeAdministradorComponent},
  {path: 'homeDocente', component:HomeDocenteComponent},
  {path: 'homeEstudiante', component:HomeEstudianteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HeaderLoginComponent,
    HeaderAdministradorComponent,
    HeaderEstudianteComponent,
    HeaderDocenteComponent,
    HomeAdministradorComponent,
    HomeDocenteComponent,
    HomeEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
