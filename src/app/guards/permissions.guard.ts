import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  constructor( private router: Router, private cookie:CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.hasPermissions()){
        return true;
      }

      this.router.navigateByUrl("/auth")
      return false;
  }

  hasPermissions():Boolean{
    return this.cookie.get("token")=="true"?true:false;    
  }
  
}
