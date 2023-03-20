import { Estrategia } from "./Estrategia";
import { Ordenacion } from "./Ordenacion";
  
/**
* Clase MergeSort que implementa la interfaz Estrategia,
* desarrollando a su vez el algoritmo de ordenación MergeSort
*/
export class MergeSort implements Estrategia {
  /**
  * Función execute que lleva a cabo el método de ordenación
  * @param data
  */
  execute(data: number[]) {
    let auxiliar : number[] = [];
    auxiliar = this.aplicarAlgoritmo(data, auxiliar, data.length);
    data = auxiliar;
    console.log(`Third algorithm applied to ${data}`);

  }

  /**
   * La matriz array_original[] tiene los elementos para ordenar
   * array_final[] es un array de trabajo
   * @param array_original 
   * @param array_final 
   * @param n 
   * @return number[]
   */
  aplicarAlgoritmo (array_original : number[], array_final : number[], n : number) : number[] {
    this.copiarArray (array_original, 0, n, array_final);
    this.ArribaAbajoSplitMerge (array_final, 0, n, array_original);
    return array_final;
  }

  /**
   * Copia única de array_original a array_final
   * @param array_original 
   * @param inicio 
   * @param final 
   * @param array_final 
   */
  copiarArray (array_original : number[], inicio : number, final : number, array_final : number[]) : void {
    for (let i : number = inicio; i < final; i++) {
        array_final[i] = array_original[i];
    }
  }

  
  /**
   * La mitad izquierda de la fuente es array_original[ inicio,medio-1]. 
   * La mitad derecha de la fuente es array_original[inicio,medio-1]. 
   * El resultado es array_final[ inicio, final-1 ]. 
   * @param array_original 
   * @param inicio 
   * @param medio 
   * @param final 
   * @param array_final 
   */
  ArribaAbajoMerge (array_original : number[], inicio : number, medio : number, final : number, array_final : number[]) : void {
    let i = inicio;
    let j = medio;
    for (let k = inicio; k < final; k++) {
        if (i < medio && (j >= final || array_original[i] <= array_original[j])) {
            array_final[k] = array_original[i];
            i++;
        } else {
            array_final[k] = array_original[j];
            j++;
        }
    }
  }
  
  /**
   * Dividir array_original[] en 2 ejecuciones, ordenar ambas ejecuciones en array_final[], fusionar ambas ejecuciones de array_final[] a array_original[] 
   * inicio es inclusivo; final es exclusivo (array_original[final] no está en el conjunto). 
   * @param array_final 
   * @param inicio 
   * @param final 
   * @param array_original 
   * @returns 
   */
  ArribaAbajoSplitMerge (array_final : number[], inicio : number, final : number, array_original : number[]) {
    if (final - inicio <= 1) {
        return;
    }
    let medio = (final + inicio) / 2;
    this.ArribaAbajoSplitMerge(array_original, inicio, medio, array_final);
    this.ArribaAbajoSplitMerge(array_original, medio, final, array_final);
    this.ArribaAbajoMerge(array_final, inicio, medio, final, array_original);
  }
  
}

/*
let algortimoOrdenacion = new Ordenacion([5,3,1,6,7,2,4,8], new MergeSort());
algortimoOrdenacion.logic();*/