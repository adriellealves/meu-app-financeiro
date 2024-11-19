import { Injectable } from '@angular/core';
import { Despesa } from './despesa.model';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[] = [];

  adicionarDespesa(despesa: Despesa) {
    this.despesas.push(despesa);
  }

  obterDespesas(): Despesa[] {
    return this.despesas;
  }

  removerDespesa(id: number) {
    this.despesas = this.despesas.filter(d => d.id !== id);
  }
}
