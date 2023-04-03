import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iData } from '../interfaces/iData';
import {dataBaseModel} from '../interfaces/iDataBase';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'backRegister/Api/configApi.php';  // URL to web api
  constructor(  private http: HttpClient) { }

  getConfiguraciones():Observable<any>{
    return this.http.get<any>(this.configUrl+"?action=getConfig");
  }

  
  getObtenerConect():Observable<any>{
    return this.http.get<any>(this.configUrl+"?action=getObtenerConect");
  }


  getConexion(bd:dataBaseModel):Observable<any>{
    return this.http.get<any>(this.configUrl+"?action=getValConect&guardar="+bd.guardar+"&instancia="+bd.instancia+"&sa="+bd.usuario+"&pass="+bd.contrasena+"&bd="+bd.basedatos+"&local="+bd.local);
  }

  setCreateDB(bd:dataBaseModel):Observable<any>{
    return this.http.get<any>(this.configUrl+"?action=setCreateDB&instancia="+bd.instancia+"&sa="+bd.usuario+"&pass="+bd.contrasena+"&bd="+bd.basedatos);
  }
  
}

