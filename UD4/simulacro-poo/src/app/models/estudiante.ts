import { dir } from "console";
import { Direccion } from "./direccion";
import { Persona } from "./persona";

export class Estudiante extends Persona{
    private _iPasen: string;
    private _notaMedia:  number;

    constructor(nombre: string,apellido1: string, apellido2: string, dni: string, direccion: Direccion, ipasen: string, notaMedia: number){
        super(nombre, apellido1, apellido2, dni, direccion);
        this._iPasen = ipasen;
        this._notaMedia = notaMedia;
    }

    
}
