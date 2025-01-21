export class Persona {

    private _dni: string;
    private _nombre: string;
    private _apellidos: string;

    constructor(dni: string, nombre: string, apellidos: string){
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

    public get dni(): string { return this._dni; }
    public set dni(value: string) { this._dni = value; }

    public get nombre(): string { return this._nombre; }
    public set nombre(value: string) { this._nombre = value; }

    public get apellidos(): string { return this._apellidos; }
    public set apellidos(value: string) { this._apellidos = value; }
}
