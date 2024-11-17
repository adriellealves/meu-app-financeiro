import { Component } from '@angular/core';
import { DespesaService } from './despesa.service';
import { Despesa } from './despesa.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {
  descricao!: string;
  valor?: number;
  data!: Date | null;

  constructor(
    private despesaService: DespesaService
  ) {}
  get despesas() { return this.despesaService.obterDespesas(); }

  onSubmit() {
    const novaDespesa = new Despesa(
      Math.random(), 
      this.descricao, 
      this.valor!, 
      this.data!
    );
    this.despesaService.adicionarDespesa(novaDespesa);
    this.descricao = '';
    this.valor = 0;
    this.data = null;
  }

  removerDespesa(id: number) {
    this.despesaService.removerDespesa(id);
  }
  
}
