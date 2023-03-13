import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosComponent} from './formularios/formularios.component';
import {ConfigComponent} from './config/config.component';


const routes: Routes = [
  { path: '', component:  FormulariosComponent},
  { path: 'config', component:  ConfigComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
