import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './homes/home-administrador/home-administrador.component';
import { HomeDocenteComponent } from './homes/home-docente/home-docente.component';
import { HomeEstudianteComponent } from './homes/home-estudiante/home-estudiante.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/Login.service';
import { HomeAdministradorDocenteComponent } from './homes/home-administrador-docente/home-administrador-docente.component';
import { JwtInterceptorService } from './Interceptor/jwt-interceptor.service';
import { ErrorInterceptorService } from './Interceptor/error-interceptor.service';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { DocentesComponent } from './docentes/docentes.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProfessorService } from './docentes/professor.service';
import { HeaderComponent } from './header/header.component';
import { NavBarAdmProfessorComponent } from './nav-bar/nav-bar-adm-professor/nav-bar-adm-professor.component';
import { UpdateProfessorComponent } from './formsUpdate/update-professor/update-professor.component';
import { ErrorComponent } from './error/error.component';
import { BadCredentionalsComponent } from './bad-credentionals/bad-credentionals.component';


const routes : Routes= [
  {path : '' ,  redirectTo: '/auth' , pathMatch: 'full'},
  {path: 'auth', component: LoginComponent },
  {path : 'homeAdm', component:HomeAdministradorComponent},
  {path: 'homeDocente', component:HomeDocenteComponent},
  {path: 'homeEstudiante', component:HomeEstudianteComponent},
  {path: 'homeAdmDocente', component:HomeAdministradorDocenteComponent},
  {path:'docentes',component:DocentesComponent},
  {path:'docentes/update/:idDocente',component:UpdateProfessorComponent},
  {path:'error',component:ErrorComponent},
  {path:'error/accessDenied',component:BadCredentionalsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeAdministradorComponent,
    HomeDocenteComponent,
    HomeEstudianteComponent,
    HomeAdministradorDocenteComponent,
    EstudiantesComponent,
    DocentesComponent,
    CursosComponent,
    HomeAdministradorDocenteComponent,
    HeaderComponent,
    NavBarAdmProfessorComponent,
    UpdateProfessorComponent,
    ErrorComponent,
    BadCredentionalsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    LoginService,
    ProfessorService,
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
