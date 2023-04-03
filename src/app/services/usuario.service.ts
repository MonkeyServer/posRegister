import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iUser } from '../interfaces/iUser';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'backRegister/Api/usuarioApi.php';  // URL to web api
  constructor(  private http: HttpClient) { }

  getUsuario(id:string):Observable<iUser>{
    // ?action=getUser&id=1030549149&ti=1
    return this.http.get<iUser>(this.url+"?action=getUser&id="+id);
  }

  setUsuario(body){
    const headers = {  };    
    return this.http.post<any>(this.url+"?action=addorUpdateUser",body,headers);
  }

  getLogin(body){
    const headers = {  };    
    return this.http.post<any>(this.url+"?action=getLogin",body,headers);
  }
}
