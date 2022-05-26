import { Carro } from "./Carro";
import { ICarro, CarroInfos } from "../contracts/Carro";

export class Fusca extends Carro implements ICarro {
  constructor(
    cor: string,
    infos: CarroInfos = {
      potencia: 26,
      torque: 7,
      velocidadeMaxima: 120,
      modelo: "Fusca",
      marca: "Volkswagen",
      seguro: 700,
      ipva: 300,
      peso: 840,
    }
  ) {
    super("Volkswagen", "Fusca", cor, infos);
  }

  acelerar(): void {
    console.log("Acelerando o fusca");
  }

  frear(): void {
    console.log("Freando o fusca");
  }

  preco(): number {
    return 6700;
  }
}
