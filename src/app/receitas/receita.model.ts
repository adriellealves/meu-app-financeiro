export class Receita {
    constructor(
      public id: number,
      public descricao: string,
      public valor: number,
      public dataVencimento: Date
    ) {}
  }
  