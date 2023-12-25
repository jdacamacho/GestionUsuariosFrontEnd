import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { login } from "./Login";
import { credentionals } from "./Credentionals";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root',
})
export class LoginService{
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    private urlEndPoint: string = 'http://localhost:5000/apiAuth/auth';

    constructor(private http: HttpClient) {}

    login(login: login): Observable<credentionals>{
        return this.http
            .post<credentionals>(this.urlEndPoint,login,{headers: this.httpHeaders})
            .pipe(
                catchError((e:any) =>{
                    if(e.status == 400){
                        return throwError(e);
                    }
                    Swal.fire("ERROR",e.error.mensaje, 'error')
                    return throwError(e);
                })
            );
    }
}
