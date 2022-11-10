import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApisInfo } from '../config/apisInfo';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  urlMsSeG: string = ApisInfo.MS_SEG_URL;
  constructor(
    private http:HttpClient
  ) { }

  ForgotPasswordRequest(userName: string):Observable<boolean> {
    let actionName = "recuperar-clave";
     return this.http.post<boolean>(`${this.urlMsSeG}/${actionName}`,{
      Usuario:userName
    });
  }

  LoginRequest(userName: string, password: string):Observable<boolean> {
    let actionName = "login";
     return this.http.post<boolean>(`${this.urlMsSeG}/${actionName}`,{
      correo:userName,
      clave:password
    });
  }
}
