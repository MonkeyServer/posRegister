import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input() ind_undo:boolean;
  @Input() empresa:string;

  constructor( private router: Router,private cookie:CookieService){

  }
  cerrarSesion(){
    this.cookie.deleteAll();
    this.router.navigateByUrl("/auth")
  }
}
