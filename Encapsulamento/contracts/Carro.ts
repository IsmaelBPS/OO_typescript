export type CarroInfos = {
  potencia: number;
  torque: number;
  velocidadeMaxima: number;
  modelo: string;
  marca: string;
  seguro: number;
  ipva: number;
  peso: number;
};

export interface ICarro {
  preco(): number;
  acelerar(): void;
  frear(): void;
}
