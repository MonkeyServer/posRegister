import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulariosComponent } from './formularios/formularios.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

// Material inside
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './config/menu/menu.component';
import { ParametrizacionComponent } from './config/parametrizacion/parametrizacion.component';
import { LoginComponent } from './auth/login/login.component'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { ConfigLocalComponent } from './config/config-local/config-local.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarSuccessComponent } from './componentes/snackbar-success/snackbar-success.component';
import { SnackbarErrorComponent } from './componentes/snackbar-error/snackbar-error.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulariosComponent,
    ToolbarComponent,
    ConfigComponent,
    MenuComponent,
    ParametrizacionComponent,
    LoginComponent,
    ConfigLocalComponent,
    SnackbarSuccessComponent,
    SnackbarErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatCheckboxModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatSnackBarModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
