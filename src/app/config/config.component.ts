import { Component,OnInit } from '@angular/core';
import {dataBaseModel} from '../interfaces/iDataBase';
import { ConfigService } from '../services/config.service';
import {FormControl,FormGroup,FormBuilder,Validators} from "@angular/forms";
import { Principal } from '../interfaces/iPrincipal';
import {ParametrosService} from '../services/parametros.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent extends Principal implements OnInit{
  form: FormGroup | null;
  hr_in = "";
  hr_us:string ='';
  hr_ct:string ='';
  hr_bd:string ='';
  db: dataBaseModel = new dataBaseModel();
  
  hrAttrib = {
    "hr_in":{
      "color":"white",
      "valor":""
    },
    "hr_us":{
      "color":"white",
      "valor":""
    },
    "hr_ct":{
      "color":"white",
      "valor":""
    },
    "hr_bd":{
      "color":"white",
      "valor":"" 
    },
  }

  constructor(private config: ConfigService,private fb: FormBuilder,private parametrosService:ParametrosService,private snackBar:MatSnackBar){   
    super(parametrosService,snackBar);
  }

  ngOnInit(): void {
      this.InicializarParametros();
      this.form = this.fb.group ({
        hr_in: [null, [Validators.required]],
        hr_us: [null, [Validators.required]],
        hr_ct: [null, [Validators.required]],
        hr_bd: [null, [Validators.required]],
      });

      this.getObtenerConect();
  }
  
  getObtenerConect(){
    this.config.getObtenerConect().subscribe(resp=>{
        console.log(resp)
        this.form.controls['hr_in'].setValue(resp.instancia);
        this.form.controls['hr_us'].setValue(resp.sa);
        this.form.controls['hr_ct'].setValue(resp.pass);
        this.form.controls['hr_bd'].setValue(resp.bd);
    })
  }

  getClaseConexion(guardar:boolean){
    this.db.instancia   = this.form.value.hr_in;
    this.db.usuario     = this.form.value.hr_us;
    this.db.contrasena  = this.form.value.hr_ct;
    this.db.basedatos   = this.form.value.hr_bd;
    this.db.guardar     = guardar;
    this.db.local       = false;
  }
  getProbarConexion(){   
    this.getClaseConexion(false);
    this.config.getConexion(this.db).subscribe(resp=>{
      if(resp == "ok")
          this.succesSnackBar("Conexión Exitosa");
        else
          this.errorSnackBar("Conexión Erronea");
    })
  }

  getGuardarConexion(){
    this.getClaseConexion(true);
    console.log(this.db);
    this.config.getConexion(this.db).subscribe(resp=>{
      if(resp == "ok")
      this.succesSnackBar("Se ha guardado la conexión exitosamente");
      else
      this.errorSnackBar("Error al guadar la conexión");
    },(error)=>{
      this.errorSnackBar("Error al guadar la conexión");
    })
  }
  
}
