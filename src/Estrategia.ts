
/**
* Common interface to all Estrategia objects. The context uses this
* interface to work with strategies
*/
export interface Estrategia {
  execute(data: number[]): void;
}