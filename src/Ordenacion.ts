import { Estrategia } from "./Estrategia";
/**
 * Clase Ordenación que incluye métodos generales
 * de los distintos algoritmos
 */
export class Ordenacion {
  /**
  * Constructor de la clase Ordenación
  * @param _data alberga el array de number
  * @param _estrategia para establecer el tipo de algoritmo a aplicar
  * en la ordenación
  */
  constructor(private _data: number[], private _estrategia: Estrategia) {
  }
    
  /**
  * Setter para establecer o cambiar la estrategia a implementar
  * @param estategia 
  */
  setestrategia(estrategia: Estrategia) {
    this._estrategia = estrategia;
  }
    
  /**
  * El contexto delega algo del trabajo al objeto Estrategia
  */
  logic() {
    this._estrategia.execute(this._data);
  }

  /**
  * Getter del atributo _data
  * @return _data
  */
  get Data() {
    return this._data;
  }

  /**
  * Setter del atributo _data
  * @param dato
  */
  set Data(dato : number[]) {
    this._data = dato;
  }

}