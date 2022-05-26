import { Carro } from "./Carro";
import { ICarro, CarroInfos } from "../contracts/Carro";

export class Civic extends Carro implements ICarro {
  constructor(
    cor: string,
    infos: CarroInfos = {
      potencia: 152,
      torque: 20.1,
      velocidadeMaxima: 195,
      modelo: "Civic",
      marca: "Honda",
      seguro: 2250,
      ipva: 1100,
      peso: 1360,
    }
  ) {
    super("Honda", "Civic", cor, infos);
  }

  public acelerar(): void {
    console.log("Acelerando Civic");
  }

  public frear(): void {
    console.log("Freando Civic");
  }

  public preco(): number {
    return 48000;
  }
}
