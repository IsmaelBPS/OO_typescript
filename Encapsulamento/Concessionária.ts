import { Carro } from "./models/Carro";
import { Fusca } from "./models/Fusca";
import { Civic } from "./models/Civic";

class Concecionaria {
  protected carros: Array<Carro> = [];

  public adicionarCarro(carro: Carro): void {
    this.carros.push(carro);
  }

  public getCarros(): Array<Carro> {
    return this.carros;
  }
}

let autopobre = new Concecionaria();
autopobre.adicionarCarro(new Fusca("vermelho"));
autopobre.adicionarCarro(new Civic("preto"));

autopobre.getCarros().forEach((carro) => {
  console.log(JSON.stringify(carro, null, 2));
  console.log("--------------");
});
