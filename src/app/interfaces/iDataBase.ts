export interface iDataBase{
    instancia: string;
    basedatos: string;
    localBd : string;
    usuario: string;
    contrasena: string;    
    guardar:boolean;
    local:boolean;
}

export class dataBaseModel implements iDataBase{
    instancia: string  = "";
    basedatos: string  = "";
    localBd: string  = "";
    usuario: string    = "";
    contrasena: string = "";
    guardar: boolean;
    local: boolean; 

    dataBaseModel(){}

}