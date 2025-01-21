import { Persona } from "./persona";

export class Profesor extends Persona{

    private _telefono: string;
    private _salarioBruto: number;

    constructor(dni: string, nombre: string, apellidos: string, telefono: string, salarioBruto: number){
        super(dni, nombre, apellidos);
        this._telefono = telefono;
        this._salarioBruto = salarioBruto;
    }

    public get telefono(): string { return this._telefono; }
    public set telefono(value: string) { this._telefono = value; }

    public get salarioBruto(): number { return this._salarioBruto; }
    public set salarioBruto(value: number) { this._salarioBruto = value; }

    public getSalarioNeto(irpf: number): number{
        return this._salarioBruto - (this._salarioBruto * irpf)/100;
    }

}
