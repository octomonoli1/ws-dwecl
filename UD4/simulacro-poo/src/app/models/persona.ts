import { Dir } from "fs";
import { Direccion } from "./direccion";

export class Persona {
    private _nombre: string;
    private _apellido1: string;
    private _apellido2: string;
    private _dni: string;
    private _direccion: Direccion;

    constructor(nombre: string, apellido1: string, apellido2: string, dni: string, direccion: Direccion){
        this._nombre = nombre;
        this._apellido1 = apellido1;
        this._apellido2 = apellido2;
        this._dni = dni;
        this._direccion = direccion
    }

    get direccion(): Direccion { return this._direccion; }
    set direccion(value: Direccion) {this._direccion = value; }

}
