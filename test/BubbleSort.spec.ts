import "mocha";
import { expect } from "chai";
import { Ordenacion } from "../src/Ordenacion";
import { BubbleSort } from "../src/BubbleSort";

describe(" Tests Ordenación BubbleSort ", () => {
  let algortimoOrdenacion = new Ordenacion([5,3,1,6,7,2,4,8], new BubbleSort());
  algortimoOrdenacion.logic();

  it("get data()", () => {
    expect(algortimoOrdenacion.Data).to.be.equal([5,3,1,6,7,2,4,8]);
  });

});