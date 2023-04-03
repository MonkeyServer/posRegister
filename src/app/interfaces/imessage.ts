export interface iMessage{
     succesSnackBar(mensaje);

     errorSnackBar(mensaje);
}

import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarSuccessComponent} from '../componentes/snackbar-success/snackbar-success.component';
import {SnackbarErrorComponent} from '../componentes/snackbar-error/snackbar-error.component';

export class message implements iMessage{
    constructor(private _snackBar: MatSnackBar){

    }

    succesSnackBar(mensaje: any) {
        this._snackBar.openFromComponent(SnackbarSuccessComponent, {
            data: mensaje,
            duration: 5 * 1000,
          });
    }
    errorSnackBar(mensaje: any) {
        this._snackBar.openFromComponent(SnackbarErrorComponent, {
        data: mensaje,
        duration: 5 * 1000,
      });
    }

}