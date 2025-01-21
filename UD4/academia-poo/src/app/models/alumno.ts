import { Direccion } from "./direccion";
import { Persona } from "./persona";

export class Alumno extends Persona{
    
    private _fechaNac: Date;
    private _direccion: Direccion; 

    constructor(dni: string, nombre: string, apellidos: string, fechaNac: Date, direccion: Direccion){
        super(dni, nombre, apellidos);
        this._fechaNac = fechaNac;
        this._direccion = direccion;
    }

    public get fechaNac(): Date { return this._fechaNac; }
    public set fechaNac(value: Date) { this._fechaNac = value; }
    
    public get direccion(): Direccion { return this._direccion; }
    public set direccion(value: Direccion) { this._direccion = value; }

    public getEdad(): number {
        
        const hoy = new Date();
        let edad = hoy.getFullYear() - this._fechaNac.getFullYear();
        if(hoy.getMonth() < this._fechaNac.getMonth()){
            edad--;
        }
        return edad;
    }

    public getIniciales(): string {
        let iniciales = "";
        const nombres = super.nombre.split(" ");
        const apellidos = super.apellidos.split(" ");

        for(let nombre of nombres){
            iniciales += nombre.charAt(0);
        }

        for(let apellido of apellidos){
            iniciales += apellido.charAt(0);
        }

        return iniciales;
    }
    
}
