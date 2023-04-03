import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ParametrosService } from '../../services/parametros.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Principal } from 'src/app/interfaces/iPrincipal';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-parametrizacion',
  templateUrl: './parametrizacion.component.html',
  styleUrls: ['./parametrizacion.component.css']
})
export class ParametrizacionComponent extends Principal implements OnInit{

  breakpoint: number;
  breakpointP: number;
  formC: FormGroup | null;
  formP: FormGroup | null;
  panelOpenState = false;

  constructor( private parametrosService: ParametrosService,private fb: FormBuilder,private snackBar:MatSnackBar ) { 
    super(parametrosService,snackBar);
  }

  ngOnInit(): void {    
    this.formC = this.fb.group ({
      hr_id : new FormControl(false),
      hr_td : new FormControl(false),
      hr_tp : new FormControl(false),
      hr_pn : new FormControl(false),
      hr_sn : new FormControl(false),
      hr_pa : new FormControl(false),
      hr_sa : new FormControl(false),
      hr_rs : new FormControl(false),
      hr_di : new FormControl(false),
      hr_te : new FormControl(false),
      hr_em : new FormControl(false),
      hr_ci : new FormControl(false),
      hr_de : new FormControl(false),
      hr_rg : new FormControl(false),
      hr_rt : new FormControl(false),
    });

    this.formP = this.fb.group ({
      hr_ep :  [{ value: "", disabled: false },  []],
      // hr_lg :  [{ value: "", disabled: false },  []],
      hr_cb :  [{ value: "", disabled: false },  []],
      hr_tb :  [{ value: "", disabled: false },  []],
      hr_cf :  [{ value: "", disabled: false },  []],
      hr_tf :  [{ value: "", disabled: false },  []],
      hr_pg :  [{ value: "", disabled: false },  []],
    });
    this.getParametros();
    this.breakpoint  = 2;
    this.breakpointP =  2;
 
  }

  onResize(event) {
    this.breakpoint  = (event.target.innerWidth <= 1000) ? ((event.target.innerWidth <= 600) ? ((event.target.innerWidth <= 400) ? 1 : 2) : 3):4;
    this.breakpointP = (event.target.innerWidth <= 1000) ?((event.target.innerWidth <= 600) ? 1 : 2):3;
  }

  getParametros(){
    this.parametrosService.getParametrizacion().subscribe((data=>{
      console.log(data);
        this.InicializarColores(data);
        this.formC.controls['hr_id'].setValue(data.IDENTIFICACION == 1?true:false);
        this.formC.controls['hr_td'].setValue(data.TIPODOCUMENTO == 1?true:false);
        this.formC.controls['hr_tp'].setValue(data.TIPOPERSONA == 1?true:false);
        this.formC.controls['hr_pn'].setValue(data.PRIMERNOMBRE == 1?true:false);
        this.formC.controls['hr_sn'].setValue(data.SEGUNDONOMBRE == 1?true:false);
        this.formC.controls['hr_pa'].setValue(data.PRIMERAPELLIDO == 1?true:false);
        this.formC.controls['hr_sa'].setValue(data.SEGUNDOAPELLIDO == 1?true:false);
        this.formC.controls['hr_rs'].setValue(data.RAZONSOCIAL == 1?true:false);
        this.formC.controls['hr_di'].setValue(data.DIRECCION == 1?true:false);
        this.formC.controls['hr_te'].setValue(data.TELEFONO == 1?true:false);
        this.formC.controls['hr_em'].setValue(data.EMAIL == 1?true:false);
        this.formC.controls['hr_ci'].setValue(data.CIUDAD == 1?true:false);
        this.formC.controls['hr_de'].setValue(data.DEPARTAMENTO == 1?true:false);
        this.formC.controls['hr_rg'].setValue(data.REGIMEN == 1?true:false);
        this.formC.controls['hr_rt'].setValue(data.REGIMENTRIBUTARIO == 1?true:false);
      
        this.formP.controls['hr_ep'].setValue(data.EMPRESA);
        // thiP.formC.controls['hr_lg'].setValue(data.LOGO);
        this.formP.controls['hr_cb'].setValue(data.COLORBANNER);
        this.formP.controls['hr_tb'].setValue(data.COLORTEXTOBANNER);
        this.formP.controls['hr_cf'].setValue(data.COLORFONDO);
        this.formP.controls['hr_tf'].setValue(data.COLORTEXTOFONDO);
        this.formP.controls['hr_pg'].setValue(data.PIDEPAGINA);
      
    }));
  }

  setParametros(){
    const body = {
        IDENTIFICACION : this.formC.value.hr_id ? 1:0,
        TIPODOCUMENTO : this.formC.value.hr_td ? 1:0,
        TIPOPERSONA : this.formC.value.hr_tp ? 1:0,
        PRIMERNOMBRE : this.formC.value.hr_pn ? 1:0,
        SEGUNDONOMBRE : this.formC.value.hr_sn ? 1:0,
        PRIMERAPELLIDO : this.formC.value.hr_pa ? 1:0,
        SEGUNDOAPELLIDO : this.formC.value.hr_sa ? 1:0,
        RAZONSOCIAL : this.formC.value.hr_rs ? 1:0,
        DIRECCION : this.formC.value.hr_di ? 1:0,
        TELEFONO : this.formC.value.hr_te ? 1:0,
        EMAIL : this.formC.value.hr_em ? 1:0,
        CIUDAD : this.formC.value.hr_ci ? 1:0,
        DEPARTAMENTO : this.formC.value.hr_de ? 1:0,
        REGIMEN : this.formC.value.hr_rg ? 1:0,
        REGIMENTRIBUTARIO : this.formC.value.hr_rt ? 1:0,
    };
    this.parametrosService.setParametrizacion(body).subscribe((data) =>{
      if(data == "OK")
      this.succesSnackBar("Parametrización Guardada");
      else
      this.errorSnackBar("Error al Guardar la parametrización");

    },(error)=>{
      this.errorSnackBar("Error al Guardar la parametrización");
    })
  }

  setConfGeneral(){
    const body = {
        EMPRESA : this.formP.value.hr_ep,
        COLORBANNER : this.formP.value.hr_cb,
        COLORTEXTOBANNER : this.formP.value.hr_tb,
        COLORFONDO : this.formP.value.hr_cf,
        COLORTEXTOFONDO : this.formP.value.hr_tf,
        PIDEPAGINA : this.formP.value.hr_pg,
    };

    this.parametrosService.setConfGeneral(body).subscribe((data) =>{
      if(data == "OK")
      this.succesSnackBar("Configuración Guardada");
      else
      this.errorSnackBar("Error al Guardar la configuración");

    },(error)=>{
      this.errorSnackBar("Error al Guardar la configuración");
    })
  }

}
