import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  private configUrl = 'backRegister/Api/parametrizacionApi.php';  // URL to web api
  constructor(  private http: HttpClient) { }

  getParametrizacion():Observable<any>{
    return this.http.get<any>(this.configUrl+"?action=getParametros");
  }

  setParametrizacion(body){
    const headers = {  };  
    return this.http.post(this.configUrl+"?action=setParametros",body,headers);
  }

  setConfGeneral(body){
    const headers = {  };  
    return this.http.post(this.configUrl+"?action=setConfGeneral",body,headers);
  }
  
}