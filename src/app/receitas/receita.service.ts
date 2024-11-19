import { Injectable } from '@angular/core';
import { Receita } from './receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private receitas: Receita[] = [];

  adicionarReceita(receita: Receita) {
    this.receitas.push(receita);
  }

  obterReceitas(): Receita[] {
    return this.receitas;
  }

  removerReceita(id: number) {
    this.receitas = this.receitas.filter(r => r.id !== id);
  }
}
