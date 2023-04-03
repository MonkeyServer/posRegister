import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'; 
import { Principal } from '../../interfaces/iPrincipal';
import {ParametrosService} from '../../services/parametros.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Principal implements OnInit {
  form: FormGroup | null;
  hr_bd:string ='';
  
  constructor(private parametrosService:ParametrosService,private usuarioService:UsuarioService, private router: Router,private fb: FormBuilder,private snackBar:MatSnackBar,private cookie:CookieService){
    super(parametrosService,snackBar);
    this.InicializarParametros();
  }

  ngOnInit(): void {
    this.InicializarParametros();
    this.form = this.fb.group ({
      hr_us: [null, [Validators.required]],
      hr_ct: [null, [Validators.required]],
    });
  }

  validarUsuario(){
    const body = { 
        USUARIO: this.form.value.hr_us,
        CONTRASENA:this.form.value.hr_ct
    };
    this.usuarioService.getLogin(body).subscribe(resp=>{
      this.cookie.delete("token");
      console.log(resp)
      if(resp == 'OK'){
        this.cookie.set("token","true");
        this.router.navigate(['/menu']);
      } else{        
        this.cookie.set("token","false");
        this.errorSnackBar("Usuario o contraseña incorrectos!!");
      }     
    })
    
  }
}
