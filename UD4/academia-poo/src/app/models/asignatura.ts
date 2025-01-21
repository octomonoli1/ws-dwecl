import { Profesor } from "./profesor";

export class Asignatura {

    private _nombre: string;
    private _descripcion: string;
    private _numHoras: number;
    private _profesor: Profesor;

    constructor(nombre: string, descripcion: string, numHoras :number, profesor: Profesor){
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._numHoras = numHoras;
        this._profesor = profesor;
    }

    public get profesor(): Profesor { return this._profesor; }
    public set profesor(value: Profesor) { this._profesor = value; }
    public get numHoras(): number { return this._numHoras; }
    public set numHoras(value: number) { this._numHoras = value; }
    public get descripcion(): string { return this._descripcion; }
    public set descripcion(value: string) { this._descripcion = value; }
    public get nombre(): string { return this._nombre; }
    public set nombre(value: string) { this._nombre = value; }
}
