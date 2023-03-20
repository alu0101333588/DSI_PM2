import { Estrategia } from "./Estrategia";
import { Ordenacion } from "./Ordenacion";
  
/**
* Clase BubbleSort que implementa la interfaz Estrategia,
* desarrollando a su vez el algoritmo de ordenación BubbleSort
*/
export class BubbleSort implements Estrategia {
  /**
  * Función execute que lleva a cabo el método de ordenación
  * @param data
  */
  execute(data: number[]) {
    for (let i : number = 0; i < data.length; i++) {
      for (let j : number = 0; j < data.length; j++) {
        if (j+1 < data.length) {
          let auxiliar = data[j+1];
          if (data[j] > auxiliar) {
            data[j+1] = data[j];
            data[j] = auxiliar;
          }
        }
        
      }
    }
  }
}
  
