import { Component,OnInit } from '@angular/core';
import {dataBaseModel} from '../../interfaces/iDataBase';
import { ConfigService } from '../../services/config.service';
import {FormControl,FormGroup,FormBuilder,Validators} from "@angular/forms";
import {Principal} from "../../interfaces/iPrincipal";
import {MatSnackBar} from '@angular/material/snack-bar';
import {ParametrosService} from '../../services/parametros.service';

@Component({
  selector: 'app-config-local',
  templateUrl: './config-local.component.html',
  styleUrls: ['./config-local.component.css']
})
export class ConfigLocalComponent  extends Principal{
 
    form: FormGroup | null;
    hr_bd:string ='';
    db: dataBaseModel = new dataBaseModel();
    
    hrAttrib = {
      "hr_bd":{
        "color":"white",
        "valor":""
      },
    }
  
    constructor(private config: ConfigService,private fb: FormBuilder,private parametrosService:ParametrosService,private  snackBar: MatSnackBar){
      super(parametrosService,snackBar);
    }
    
    ngOnInit(): void {
        this.InicializarParametros();
        this.form = this.fb.group ({
          hr_bd: [null, [Validators.required]],
        });
  
        this.getObtenerConect();
    }
    
    getObtenerConect(){
      this.config.getObtenerConect().subscribe(resp=>{
          console.log(resp)
          this.form.controls['hr_bd'].setValue(resp.localBd);
      })
    }
  
    getClaseConexion(guardar:boolean){
      this.db.basedatos   = this.form.value.hr_bd;
      this.db.guardar     = guardar;
      this.db.local       = true;
    }
    getProbarConexion(){   
      this.getClaseConexion(false);
      this.config.getConexion(this.db).subscribe(resp=>{
        console.log(resp);
        if(resp == "ok")
          this.succesSnackBar("Conexión Exitosa");
        else
          this.errorSnackBar("Conexión Erronea");
      },(error)=>{
        this.errorSnackBar("Conexión Erronea");
      })
    }
  
    getGuardarConexion(){
      this.getClaseConexion(true);
      console.log(this.db);
      this.config.getConexion(this.db).subscribe(resp=>{
        console.log(resp);
        if(resp == "ok")
        this.succesSnackBar("Se ha guardado la conexión exitosamente");
        else
        this.errorSnackBar("Error al guadar la conexión");
      },(error)=>{
        this.errorSnackBar("Error al guadar la conexión");
      })
    }
    
    setCrearBaseDeDatos(){
      this.getClaseConexion(false);
      console.log(this.db);
      this.config.setCreateDB(this.db).subscribe(resp=>{
        console.log(resp);
        if(resp == "ok")
          this.succesSnackBar("Se ha creado la base de datos exitosamente");
        else
        this.errorSnackBar("Error al crear la base de datos");

      },(error)=>{
        this.errorSnackBar("Error al crear la base de datos");
      })
    }  
}
