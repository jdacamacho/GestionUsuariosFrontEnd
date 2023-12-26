import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/Login.service';
import { Professor } from './Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private urlEndPointAdm: string = 'http://localhost:5000/apiProfessor/adm/professors';
  private urlEndPointProfessor: string = 'http://localhost:8085/api/clientes';

  constructor(private http: HttpClient,private loginService: LoginService) {}

  getProfessors(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.urlEndPointAdm);
  }

  getProfessor() : Observable<Professor> {
    console.log("servicio", this.loginService.getCurrentIdUser)
    return this.http.get<Professor>(this.urlEndPointAdm + "/" + this.loginService.getCurrentIdUser);
  }



}
