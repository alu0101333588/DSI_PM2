import { Estrategia } from "./Estrategia";
export class Ordenacion {
    /**
    * The context has a reference to a estrategia object. It should only works
    * with strategies through the estrategia interface
    */
    constructor(private _data: number[], private _estrategia: Estrategia) {
    }
    
    /**
    * A setter is required in order to change the estrategia in execution time
    * @param estrategia Current estrategia applied
    */
    setestrategia(estrategia: Estrategia) {
      this._estrategia = estrategia;
    }
    
    /**
    * The context delegates some work to the estrategia object
    */
    logic() {
      this._estrategia.execute(this._data);
    }

    get Data() {
        return this._data;
    }

    set Data(dato : number[]) {
        this._data = dato;
    }

}