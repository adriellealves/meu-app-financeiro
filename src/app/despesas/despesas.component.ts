import { Component } from '@angular/core';
import { DespesaService } from './despesa.service';
import { Despesa } from './despesa.model';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-despesas',
    templateUrl: './despesas.component.html',
    styleUrls: ['./despesas.component.css'],
    standalone: false
})
export class DespesasComponent {
  descricao!: string;
  valor?: number;
  data!: Date | null;

  constructor(
    private despesaService: DespesaService
  ) {}
  get despesas() { 
    const despesas = this.despesaService.obterDespesas();
    console.log('Despesas:', despesas);
    return despesas;
   }

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
