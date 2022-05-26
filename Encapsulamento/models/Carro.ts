import { CarroInfos } from "../contracts/Carro";

/**
 * Classe abstrata de carro
 *
 *
 */
export abstract class Carro {
  constructor(
    private _marca: string,
    private _modelo: string,
    private _cor: string,
    private _informacoes: CarroInfos
  ) {}

  protected getMarca(): string {
    return this._marca;
  }

  protected getModelo(): string {
    return this._modelo;
  }

  protected getCor(): string {
    return this._cor;
  }

  public informacoes(): CarroInfos {
    return this._informacoes;
  }
}
