export interface iPrincipal{

    colorFondo:string;
    colorTexto:string;
    dataParameter:any;
    _empresa:string;
    InicializarParametros():any;
    getParameter();
}

import { ParametrosService } from '../services/parametros.service';
import {message} from '../interfaces/imessage';
import {MatSnackBar} from '@angular/material/snack-bar';
export class Principal extends message implements iPrincipal{
    colorFondo: string;
    colorTexto: string;
    dataParameter:any;
    _empresa: string;
    
    constructor(private __parametrosService: ParametrosService,private __matSnackBar:MatSnackBar){
        super(__matSnackBar);
    }    
    

    InicializarParametros():any{
        this.__parametrosService.getParametrizacion().subscribe( (data: any) =>{ 
            this._empresa = data.EMPRESA;
            this.InicializarColores(data);
        });    
    }

    InicializarColores(data){
        const bodyElement = document.body;
        this._empresa = data.EMPRESA;
        bodyElement.style.setProperty("--fondo-color", data.COLORFONDO);
        bodyElement.style.setProperty("--text-color", data.COLORTEXTOFONDO);
        bodyElement.style.setProperty("--fondo-banner-color", data.COLORBANNER);
        bodyElement.style.setProperty("--text-banner-color", data.COLORTEXTOBANNER);
    }

    public  getParameter(){
        console.log(this.dataParameter);
        return this.dataParameter;
    }
}