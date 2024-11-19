import { Injectable } from '@angular/core';
import { Despesa } from './despesa.model';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[] = [
    new Despesa(1, 'Compra de alimentos', 150.5, new Date('2024-11-01')),
    new Despesa(2, 'Gasolina', 80, new Date('2024-11-10'))
  ];

  adicionarDespesa(despesa: Despesa) {
    this.despesas.push(despesa);
  }

  obterDespesas() {
    return this.despesas;
  }

  removerDespesa(id: number) {
    this.despesas = this.despesas.filter(d => d.id !== id);
  }
}
