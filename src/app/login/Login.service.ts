import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError,tap ,throwError } from "rxjs";
import { login } from "./Login";
import { credentionals } from "./Credentionals";
import Swal from "sweetalert2";
@Injectable({
    providedIn: 'root',
})
export class LoginService{
    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    private urlEndPoint: string = 'http://localhost:5000/apiAuth/auth';
    public currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public token : BehaviorSubject<string> = new BehaviorSubject<string>('');
    public currentIdUser : number = 0;

    constructor(private http: HttpClient) {
        if (typeof sessionStorage !== 'undefined') {
            this.token.next(sessionStorage.getItem('token') || '');
            this.currentUserLoginOn = new BehaviorSubject<boolean>(this.token.value !== '');
        }
    }

    login(login: login): Observable<credentionals>{
        return this.http
            .post<credentionals>(this.urlEndPoint,login,{headers: this.httpHeaders})
            .pipe(
                catchError((e:any) =>{
                    if (e.status === 203) {
                        return throwError('Credenciales incorrectas');
                    }
                    Swal.fire('ERROR', e.error.mensaje, 'error');
                    return throwError(e);
                }),
                tap((credentionals:credentionals)=>{
                    sessionStorage.setItem('token',credentionals.token);
                    this.currentUserLoginOn.next(true);
                    this.token.next(sessionStorage.getItem('token') as string);
                    //this.setcurrentIdUser(credentionals.idUser);
                })
            );
    }

    logout():void{
        sessionStorage.removeItem("token");
        this.currentUserLoginOn.next(false);
    }

    public setcurrentIdUser(idUser:number){
        this.currentIdUser = idUser;
    }

    get getCurrentIdUser(){
        return this.currentIdUser;
    }

    get getUserToken(){
        return this.token.value;
    }
}