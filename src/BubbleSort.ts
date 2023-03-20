import { Estrategia } from "./Estrategia";
import { Ordenacion } from "./Ordenacion";
  
/**
* --
*/

class BubbleSort implements Estrategia {
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
    console.log(`First algorithm applied to ${data}`);
  }
}
  

let algortimoOrdenacion = new Ordenacion([5,3,1,6,7,2,4,8], new BubbleSort());
algortimoOrdenacion.logic();
