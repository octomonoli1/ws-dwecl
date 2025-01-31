export class Direccion {
    private _calle: string;
    private _numero: number;
    private _municipio: string;
    private _ciudad: string;
    private _pais: string;

    constructor(calle: string, numero: number, municipio: string, ciudad: string, pais: string){
        this._calle = calle;
        this._numero = numero;
        this._municipio = municipio;
        this._ciudad = ciudad;
        this._pais = pais;        
    }

    get calle(): string { return this._calle; }
    set calle(value: string) { this._calle = value; }

    get numero(): number { return this._numero; }
    set numero(value: number) { this._numero = value; }

    get municipio(): string { return this._municipio; }
    set municipio(value: string) { this._municipio = value; }

    get ciudad(): string { return this._ciudad }
    set ciudad(value: string) { this._ciudad = value }

    get pais(): string { return this._pais; }
    set pais(value: string) { this._pais = value }

    public viveCasaPar(): boolean{
        return this._numero % 2 == 0;
    }
}
