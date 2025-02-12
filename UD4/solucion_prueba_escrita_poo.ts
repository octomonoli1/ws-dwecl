//Esta clase no se pide (se da por implementada)
export class Persona {
    private _dni: string;
    private _nombre: string;
    private _apellidos: string;

    constructor(dni: string, nombre: string, apellidos: string){
        this._dni = dni;
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

}
export class Mecanico extends Persona{

    //Atributos -------------------------------------------------------
    private _salario: number;
    private _antiguedad: number;
    private _irpf: number;

    //Constructor -----------------------------------------------------
    constructor(dni: string, nombre: string, apellidos: string, 
        salario: number, antiguedad: number, irpf: number){
        super(dni, nombre, apellidos);
        this._salario = salario;
        this._antiguedad = antiguedad;
        this._irpf = irpf;
    }

    //Getters and setters ---------------------------------------------
    public get salario(): number { return this._salario; }
    public set salario(value: number) { this._salario = value;  }
    public get antiguedad(): number { return this._antiguedad; }
    public set antiguedad(value: number) { this._antiguedad = value; }
    public get irpf(): number { return this._irpf; }
    public set irpf(value: number) { this._irpf = value; }

    //Otros metodos ----------------------------------------------------
    public getSalarioNeto(): number{
        const dto =  this._salario*(this._irpf/100);
        return this._salario - this.salario;
    }

    public subirCotizacion(incremento: number){
        this._irpf += incremento;
    }

}

//Esta clase no se pide (se da por implementada)
export class Propietario extends Persona{
    private _direccion: string;

    constructor(dni: string, nombre: string, apellidos:string, direccion: string){
        super(dni, nombre, apellidos);
        this._direccion = direccion;
    }
}

export class Vehiculo{

    //Atributos -------------------------------------------------------
    private _matricula: string;
    private _color: string;
    private _marca: string;
    private _cilindrada: string;
    private _fechaCompra: Date;
    private _propietario: Propietario;
    

    //Constructor ------------------------------------------------------
    constructor(matricula: string, color: string, marca: string, 
        cilindrada: string, fechaCompra: Date, propietario: Propietario){
        this._matricula = matricula;
        this._color = color;
        this._marca = marca;
        this._cilindrada = cilindrada; 
        this._fechaCompra = fechaCompra;
        this._propietario = propietario;
    }

    //Getters and Setters ----------------------------------------------
    public get matricula(): string { return this._matricula; }
    public set matricula(value: string) { this._matricula = value; }
    public get color(): string { return this._color; }
    public set color(value: string) { this._color = value; }
    public get marca(): string { return this._marca; }
    public set marca(value: string) { this._marca = value; }
    public get cilindrada(): string { return this._cilindrada; }
    public set cilindrada(value: string) { this._cilindrada = value; }
    public get fechaCompra(): Date { return this._fechaCompra; }
    public set fechaCompra(value: Date) { this._fechaCompra = value; }
    public get propietario(): Propietario { return this.propietario; }
    public set propietario(value: Propietario) { this._propietario = value; }

    //Otros metodos ----------------------------------------------------
    public getAntiguedad(): number{
        return new Date().getFullYear() - this.fechaCompra.getFullYear();
    }

}

export class Arregla{

    //Atributos -------------------------------------------------------
    private _fechaArreglo: Date;
    private _observaciones: string;
    private _mecanico: Mecanico;
    private _vehiculo: Vehiculo;

    //Constructor ------------------------------------------------------
    constructor(fechaArreglo: Date, observaciones: string, mecanico: Mecanico, 
        vehiculo: Vehiculo){
        this._fechaArreglo = fechaArreglo;
        this._observaciones = observaciones;
        this._mecanico = mecanico;
        this._vehiculo = vehiculo;
    }

    //Getters and Setters ----------------------------------------------

    //Otros metodos
    public toString(){
        return "Arregla: {" 
            + this._fechaArreglo + ", " 
            + this._observaciones + ", "
            + this._vehiculo.toString() + ", "
            + this._mecanico.toString()  + "}"
    }
}