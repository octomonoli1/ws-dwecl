import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {
    
    private _alumno: Alumno;
    private _asignatura: Asignatura;
    private _notaTrim1: number;
    private _notaTrim2: number;
    private _notaTrim3: number;
    

    constructor (alumno: Alumno, asignatura: Asignatura, notaTrim1: number, notaTrim2: number, notaTrime3: number){
        this._alumno = alumno;
        this._asignatura = asignatura;
        this._notaTrim1 = notaTrim1;
        this._notaTrim2 = notaTrim2;
        this._notaTrim3 = notaTrime3;
    }

    public get alumno(): Alumno { return this._alumno; }
    public set alumno(value: Alumno) { this._alumno = value; }

    public get asignatura(): Asignatura { return this._asignatura; }
    public set asignatura(value: Asignatura) { this._asignatura = value; }

    public get notaTrim1(): number { return this._notaTrim1; }
    public set notaTrim1(value: number) { this._notaTrim1 = value; }

    public get notaTrim2(): number { return this._notaTrim2; }
    public set notaTrim2(value: number) { this._notaTrim2 = value; }

    public get notaTrim3(): number { return this._notaTrim3; }
    public set notaTrim3(value: number) { this._notaTrim3 = value; }

    public getNotaMedia(): number{
        return (this._notaTrim1 + this._notaTrim2 + this._notaTrim3)/3;
    }

}
