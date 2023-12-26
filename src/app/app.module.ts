import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLoginComponent } from './headers/header-login/header-login.component';
import { HeaderAdministradorComponent } from './headers/header-administrador/header-administrador.component';
import { HeaderEstudianteComponent } from './headers/header-estudiante/header-estudiante.component';
import { HeaderDocenteComponent } from './headers/header-docente/header-docente.component';
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
import { HeaderAdministradorDocenteComponent } from './headers/header-administrador-docente/header-administrador-docente.component';
import { InformationProfessorComponent } from './userInformation/information-professor/information-professor.component';
import { InformationStudentComponent } from './userInformation/information-student/information-student.component';


const routes : Routes= [
  {path : '' ,  redirectTo: '/auth' , pathMatch: 'full'},
  {path: 'auth', component: LoginComponent },
  {path : 'homeAdm', component:HomeAdministradorComponent},
  {path: 'homeDocente', component:HomeDocenteComponent},
  {path: 'homeEstudiante', component:HomeEstudianteComponent},
  {path: 'homeAdmDocente', component:HomeAdministradorDocenteComponent},
  {path:'docentes',component:DocentesComponent},
  {path:'informationProfessor',component:InformationProfessorComponent}
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
    HomeAdministradorDocenteComponent,
    EstudiantesComponent,
    DocentesComponent,
    CursosComponent,
    HeaderAdministradorDocenteComponent,
    InformationProfessorComponent,
    InformationStudentComponent,
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
