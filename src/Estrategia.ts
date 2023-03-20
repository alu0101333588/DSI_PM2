
/**
* Interfaz Estrategia que da soporte a las funciones comunes
* de las clases que impementarán dicha interfaz para aplicar
* los distintos algoritmos de ordenación
*/
export interface Estrategia {
  /**
   * Función execute para desarrollar el algoritmo en cuestión
   * @param data 
   */
  execute(data: number[]): void;
}