import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginService } from '../login/Login.service';
import { Professor } from './Professor';
import Swal from 'sweetalert2';
import { ProfessorType } from './ProfessoType';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private urlEndPointAdm: string = 'http://localhost:5000/apiProfessor/adm/professors';
  private urlEndPointProfessor: string = 'http://localhost:5000/apiProfessor/professors';
  

  constructor(private http: HttpClient) {}

  getProfessors(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.urlEndPointAdm);
  }

  getProfessorsExclude(idUser:number): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.urlEndPointAdm+"/exclude/"+idUser);
  }

  getProfessor(idUser:number) : Observable<Professor> {
    return this.http.get<Professor>(this.urlEndPointProfessor + "/" + idUser);
  }

  getTypeProfessors(): Observable<ProfessorType[]>{
    return this.http.get<ProfessorType[]>(this.urlEndPointAdm + "/professorsType");
  }

  create(professor: Professor): Observable<Professor> {
    return this.http
      .post<Professor>(this.urlEndPointAdm, professor, { headers: this.httpHeaders })
      .pipe(
        catchError((e: any) => {
          console.log(e.error.mensaje);
          Swal.fire('Error al crear el docente', e.error.mensaje, 'error');
          return throwError(e);
        })
      );
  }

  update(professor: Professor,idProfessor : number): Observable<Professor>{
    return this.http
      .put<Professor>(this.urlEndPointAdm + "/" + idProfessor,professor,{headers:this.httpHeaders})
      .pipe(
        catchError((e:any)=>{
          Swal.fire('Error al actualizar el docente', e.error.mensaje, 'error');
          return throwError(e);
        })
      )
  }




}
