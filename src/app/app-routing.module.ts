import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent} from './formularios/formularios.component';
import {ConfigComponent} from './config/config.component';
import {ConfigLocalComponent} from './config/config-local/config-local.component';
import {MenuComponent} from './config/menu/menu.component';
import {ParametrizacionComponent} from './config/parametrizacion/parametrizacion.component';
import {LoginComponent} from './auth/login/login.component';
import { PermissionsGuard } from './guards/permissions.guard';


const routes: Routes = [
  { path: '',       component:  FormulariosComponent,  pathMatch: 'full'},
  { path: 'config', component:  ConfigComponent,canActivate:[PermissionsGuard]},
  { path: 'configLocal', component:  ConfigLocalComponent,canActivate:[PermissionsGuard]},
  { path: 'menu',   component:  MenuComponent,canActivate:[PermissionsGuard]},
  { path: 'parametrizacion',   component:  ParametrizacionComponent,canActivate:[PermissionsGuard]},
  { path: 'auth',   component:  LoginComponent},
  { path: '**', component:  FormulariosComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
