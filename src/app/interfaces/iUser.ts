export interface iUser{
    CODCLIENTE: string ;
    NOMBRECOMERCIAL: string ;
    DIRECCION1: string ;
    CIUDAD: string ;
    PROVINCIA: string ;
    TELEFONO1: string ;
    E_MAIL: string ;
    CIF: string ;
    APELLIDO_1: string ;
    APELLIDO_2: string ;
    NOMBRE_1: string ;
    OTROS_NOMBRES: string ;
    FE_MUNICIPIO: string ;
    FE_REGIMEN: string ;
    FE_RESPONSABILIDADES: string ;
    TIPO_DE_DOCUMENTO: string ;
    TIPOPERSONA: string ;
}

export class user implements iUser{
    CODCLIENTE: string;
    NOMBRECOMERCIAL: string;
    DIRECCION1: string;
    CIUDAD: string;
    PROVINCIA: string;
    TELEFONO1: string;
    E_MAIL: string;
    CIF: string;
    APELLIDO_1: string;
    APELLIDO_2: string;
    NOMBRE_1: string;
    OTROS_NOMBRES: string;
    FE_MUNICIPIO: string;
    FE_REGIMEN: string;
    FE_RESPONSABILIDADES: string;
    TIPO_DE_DOCUMENTO: string;
    TIPOPERSONA: string;    
       
    user(){}

}