export class Despesa {
    constructor(
      public id: number,
      public descricao: string,
      public valor: number,
      public dataFeita: Date,
      public dataPaga: Date
    ) {}
  }
  