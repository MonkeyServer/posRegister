import { Component ,OnInit,ElementRef} from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { iData } from '../interfaces/iData';
import { ConfigService } from '../services/config.service';
import { UsuarioService } from '../services/usuario.service';
import { ParametrosService } from '../services/parametros.service';
import {Principal} from '../interfaces/iPrincipal';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent extends Principal implements OnInit {

  form: FormGroup | null;
  tiposDoc: iData[] = [];
  regimen: iData[] = [];
  regimenTributario: iData[] = [];
  tipoPersona: iData[] = [];
  action :string = "ADD";
  empresa:string;  
  parametros:any;
  hrAttrib = {
      "hr_id":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": false
      },
      "hr_dv":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"none !important",
        "value":"",
        "disabled": true
      },
      "hr_td":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_tp":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"none !important",
        "value":"",
        "disabled": true
      },
      "hr_pn":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_sn":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_pa":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_sa":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_rs":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"none !important",
        "value":"",
        "disabled": true
      },
      "hr_di":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_em":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_te":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_ci":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_de":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_rg":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },
      "hr_rt":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      },  
      "hr_au":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      }, 
      "hr_bt":{
        "color":"white",
        "obligatorio":"required",
        "hidden":"flex !important",
        "value":"",
        "disabled": true
      }, 
    };

  constructor(  private config: ConfigService, private usuarioS:UsuarioService,private parametrosService: ParametrosService,private matSnackBar:MatSnackBar,private fb: FormBuilder,private elem: ElementRef) { 
    super(parametrosService,matSnackBar);    
  }

  ngOnInit() {         
      this.inicializarFormulario();
      this.getConfiguraciones();   
  }

  public inicializarFormulario(){
    this.form = this.fb.group ({
      hr_id: [{ value: '', disabled: false }, [Validators.required]],
      hr_td: [{ value: '', disabled: true },  [Validators.required]],
      hr_tp: [{ value: '', disabled: true },  [Validators.required]],
      hr_dv: [{ value: '', disabled: true },  [Validators.required]],
      hr_pn: [{ value: '', disabled: true },  [Validators.required,Validators.pattern("^[A-Za-z0-9]{3,30}$")]],
      hr_sn: [{ value: '', disabled: true },  [Validators.pattern("^[A-Za-z0-9]{0,30}$")]],
      hr_pa: [{ value: '', disabled: true },  [Validators.required,Validators.pattern("^[A-Za-z0-9]{3,30}$")]],
      hr_sa: [{ value: '', disabled: true },  [Validators.pattern("^[A-Za-z0-9]{0,30}$")]],
      hr_rs: [{ value: '', disabled: true },  [Validators.required]],
      hr_di: [{ value: '', disabled: true },  [Validators.required]],
      hr_te: [{ value: '', disabled: true },  [Validators.required]],
      hr_em: [{ value: '', disabled: true },  [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      hr_ci: [{ value: '', disabled: true },  [Validators.required]],
      hr_de: [{ value: '', disabled: true },  [Validators.required]],
      hr_rg: [{ value: '', disabled: true },  [Validators.required]],      
      hr_rt: [{ value: '', disabled: true },  [Validators.required]],
      hr_au: new FormControl(false,[Validators.requiredTrue])
    });
    this.getParametros();
  }

  private getParametros(){
      this.parametrosService.getParametrizacion().subscribe( (data: any) =>{      
        this.empresa = data.EMPRESA;
        
        super.InicializarColores(data);
        this.form.controls['hr_td'].setValidators((data.TIPODOCUMENTO== 1?Validators.required:null));
        this.form.controls['hr_tp'].setValidators((data.TIPOPERSONA== 1?Validators.required:null));
        this.form.controls['hr_dv'].setValidators((data.DV== 1?Validators.required:null));
        this.form.controls['hr_pn'].setValidators((data.PRIMERNOMBRE== 1?Validators.required:null));
        this.form.controls['hr_sn'].setValidators((data.SEGUNDONOMBRE== 1?Validators.required:null));
        this.form.controls['hr_pa'].setValidators((data.PRIMERAPELLIDO== 1?Validators.required:null));
        this.form.controls['hr_sa'].setValidators((data.SEGUNDOAPELLIDO== 1?Validators.required:null));
        this.form.controls['hr_rs'].setValidators((data.RAZONSOCIAL== 1?Validators.required:null));
        this.form.controls['hr_di'].setValidators((data.DIRECCION== 1?Validators.required:null));
        this.form.controls['hr_te'].setValidators((data.TELEFONO== 1?Validators.required:null));
        this.form.controls['hr_em'].setValidators((data.EMAIL== 1?Validators.required:null));
        this.form.controls['hr_ci'].setValidators((data.CIUDAD== 1?Validators.required:null));
        this.form.controls['hr_de'].setValidators((data.DEPARTAMENTO== 1?Validators.required:null));
        this.form.controls['hr_rg'].setValidators((data.REGIMEN== 1?Validators.required:null));
        this.form.controls['hr_rt'].setValidators((data.REGIMENTRIBUTARIO== 1?Validators.required:null));
    });
  }

  private getConfiguraciones(){
    this.config.getConfiguraciones().subscribe( (data: iData[]) =>{

      this.tiposDoc = data.filter(data => data.TABLA.indexOf('TI') != -1);
      this.regimen = data.filter(data => data.TABLA.indexOf('FR') != -1);
      this.regimenTributario = data.filter(data => data.TABLA.indexOf('FT') != -1);
      this.tipoPersona = data.filter(data => data.TABLA.indexOf('TP') != -1);
    });
  }

  public getUsuario(){
    this.usuarioS.getUsuario(this.form.value.hr_id).subscribe((resp:any)=>{
      if( resp != "error"){
        console.log(resp);
        this.form.controls['hr_td'].setValue(resp.TIPO_DE_DOCUMENTO);
        this.form.controls['hr_dv'].setValue(resp.DV);        
        this.form.controls['hr_pn'].setValue(resp.NOMBRE_1);
        this.form.controls['hr_sn'].setValue(resp.OTROS_NOMBRES);
        this.form.controls['hr_pa'].setValue(resp.APELLIDO_1);
        this.form.controls['hr_sa'].setValue(resp.APELLIDO_2);
        this.form.controls['hr_rs'].setValue(resp.NOMBRE_1);
        this.form.controls['hr_di'].setValue(resp.DIRECCION1);
        this.form.controls['hr_te'].setValue(resp.TELEFONO1);
        this.form.controls['hr_em'].setValue(resp.E_MAIL);
        this.form.controls['hr_ci'].setValue(resp.CIUDAD);
        this.form.controls['hr_de'].setValue(resp.PROVINCIA);
        this.form.controls['hr_rg'].setValue(resp.FE_REGIMEN);    
        this.form.controls['hr_rt'].setValue(resp.FE_DET_TRIBUTARIO);
        this.form.controls['hr_au'].setValue(true);
        this.form.controls['hr_tp'].setValue(resp.TIPOPERSONA);
        this.action = "UPDATE";
        this.validarTipoDocumento(resp);

      }else{ 
        this.form.controls['hr_td'].setValue("");
        this.form.controls['hr_dv'].setValue("");        
        this.form.controls['hr_pn'].setValue("");
        this.form.controls['hr_sn'].setValue("");
        this.form.controls['hr_pa'].setValue("");
        this.form.controls['hr_sa'].setValue("");
        this.form.controls['hr_rs'].setValue("");
        this.form.controls['hr_di'].setValue("");
        this.form.controls['hr_te'].setValue("");
        this.form.controls['hr_em'].setValue("");
        this.form.controls['hr_ci'].setValue("");
        this.form.controls['hr_de'].setValue("");
        this.form.controls['hr_rg'].setValue(""); 
        this.form.controls['hr_rt'].setValue("");
        this.form.controls['hr_au'].setValue(false);
        this.form.controls['hr_tp'].setValue("");
        this.action = "ADD";
      }
       this.habilitarCampos();
    });
  }

  private habilitarCampos(){
    // this.form.controls['hr_id'].enable();
    this.form.controls['hr_td'].enable();
    this.form.controls['hr_dv'].enable();
    this.form.controls['hr_tp'].enable();
    this.form.controls['hr_pn'].enable();
    this.form.controls['hr_sn'].enable();
    this.form.controls['hr_pa'].enable();
    this.form.controls['hr_sa'].enable();
    this.form.controls['hr_rs'].enable();
    this.form.controls['hr_di'].enable();
    this.form.controls['hr_te'].enable();
    this.form.controls['hr_em'].enable();
    this.form.controls['hr_ci'].enable();
    this.form.controls['hr_de'].enable();
    this.form.controls['hr_rg'].enable();    
    this.form.controls['hr_rt'].enable();
    this.form.controls['hr_au'].enable();
    this.hrAttrib.hr_bt.disabled = false;
  }

  public validarTipoPersona(){
      let tipo_persona = this.form.value.hr_tp;
      if(tipo_persona == 2){
        this.form.controls['hr_rg'].setValue("49");
        this.form.controls['hr_rt'].setValue("ZY");
      }
  }

  public validarTipoDocumento(resp){
    let tipo_documento ;
      if(resp == null){
         tipo_documento = this.form.value.hr_td;
      }else{
        tipo_documento = resp.TIPO_DE_DOCUMENTO;
      }
      
      if(tipo_documento == 31 || tipo_documento == 50 || tipo_documento == '31' || tipo_documento == '50' ){
         this.hrAttrib.hr_pn.hidden = "none  !important";
         this.hrAttrib.hr_sn.hidden = "none  !important";
         this.hrAttrib.hr_pa.hidden = "none  !important";
         this.hrAttrib.hr_sa.hidden = "none  !important";
         this.hrAttrib.hr_rs.hidden = "flex !important";
         this.hrAttrib.hr_dv.hidden = "flex !important";
         this.form.controls['hr_pn'].setValue("null"); 
         this.form.controls['hr_sn'].setValue("null"); 
         this.form.controls['hr_pa'].setValue("null"); 
         this.form.controls['hr_sa'].setValue("null");   
         this.form.controls['hr_tp'].setValue("null");   
         this.form.controls['hr_rs'].setValue(resp == null?this.form.value.hr_rs== "null"?"":this.form.value.hr_rs: resp.NOMBRE_1 == "null"?"":resp.NOMBRE_1  );
         this.form.controls['hr_dv'].setValue(resp == null?this.form.value.hr_dv== "null"?"":this.form.value.hr_dv: resp.DV == "null"?"":resp.DV);

         this.form.controls['hr_rg'].setValue(resp == null?this.form.value.hr_rg: resp.FE_REGIMEN);
         this.form.controls['hr_rt'].setValue(resp == null?this.form.value.hr_rt: resp.FE_DET_TRIBUTARIO);
         this.form.controls['hr_tp'].setValue("1");
      }else{        
        this.hrAttrib.hr_tp.hidden = "flex !important";
        this.hrAttrib.hr_pn.hidden = "flex !important";
        this.hrAttrib.hr_sn.hidden = "flex !important";
        this.hrAttrib.hr_pa.hidden = "flex !important";
        this.hrAttrib.hr_sa.hidden = "flex !important";
        this.hrAttrib.hr_rs.hidden = "none  !important";
        this.hrAttrib.hr_dv.hidden = "none !important";
        this.form.controls['hr_rs'].setValue("null"); 
        this.form.controls['hr_dv'].setValue("null");
        this.form.controls['hr_pn'].setValue(resp == null?this.form.value.hr_pn == "null"?"":this.form.value.hr_pn: resp.NOMBRE_1 == "null"?"":resp.NOMBRE_1); 
        this.form.controls['hr_sn'].setValue(resp == null?this.form.value.hr_sn == "null"?"":this.form.value.hr_sn: resp.OTROS_NOMBRES == "null"?"":resp.OTROS_NOMBRES); 
        this.form.controls['hr_pa'].setValue(resp == null?this.form.value.hr_pa == "null"?"":this.form.value.hr_pa: resp.APELLIDO_1 == "null"?"":resp.APELLIDO_1); 
        this.form.controls['hr_sa'].setValue(resp == null?this.form.value.hr_sa == "null"?"":this.form.value.hr_sa: resp.APELLIDO_2 == "null"?"":resp.APELLIDO_2);            
        this.form.controls['hr_tp'].setValue("2");
      }
      this.validarTipoPersona();
  }

  public setUsuario(){
    if(this.form.status == "VALID"){
      const tipDoc:   iData[] = this.tiposDoc.filter(data => data.POSICION == this.form.value.hr_td );
      const tipPer:   iData[] = this.tipoPersona.filter(data => data.POSICION == this.form.value.hr_tp);
      const regimen:  iData[] = this.regimen.filter(data => data.POSICION == this.form.value.hr_rg);
      const regimenT: iData[] = this.regimenTributario.filter(data => data.POSICION == this.form.value.hr_rt);
      let nombre = "", nombre1 = "";
      if(this.form.value.hr_td == 31 || this.form.value.hr_td == 50) {
        nombre  = this.form.value.hr_rs;
        nombre1 = this.form.value.hr_rs;
      }else{
        nombre  = this.form.value.hr_pn+" "+this.form.value.hr_sn+" "+this.form.value.hr_pa+" "+this.form.value.hr_sa;
        nombre1 = this.form.value.hr_pn;
      }
       
      const body = {         
        NOMBRECLIENTE:  nombre,
        NOMBRECOMERCIAL: nombre, 
        CIF: this.form.value.hr_id,
        DIRECCION1: this.form.value.hr_di,
        TELEFONO1: this.form.value.hr_te,
        E_MAIL: this.form.value.hr_em,
        POBLACION:this.form.value.hr_ci,
        PROVINCIA:this.form.value.hr_de,

        APELLIDO_1:this.form.value.hr_pa,
        APELLIDO_2:this.form.value.hr_sa,
        NOMBRE_1:nombre1,
        OTROS_NOMBRES:this.form.value.hr_sn,
        RAZON_SOCIAL:this.form.value.hr_rs,
        TIPO_DE_DOCUMENTO:this.form.value.hr_td, 
        NOM_TIPO_DE_DOCUMENTO: tipDoc[0].VALORBD,
        TIPOPERSONA:this.form.value.hr_tp,// falta por crear
        NOM_TIPOPERSONA: tipPer[0].VALORBD,
        DV:this.form.value.hr_dv,
        FE_DET_TRIBUTARIO:regimenT[0].VALORBD,
        FE_MUNICIPIO:this.form.value.hr_ci,
        FE_REGIMEN:regimen[0].VALORBD,
        ACTION : this.action
      };
     
      this.usuarioS.setUsuario(body).subscribe((resp)=>{
          console.log(resp);
          if(resp == "OK"){
            this.succesSnackBar("Se guardaron los datos exitosamente");
            this.inicializarFormulario();
          }          
      });
    }else{
      console.log(this.form)
      console.log("Falta algunos parametros");
    }
    
  }
}
