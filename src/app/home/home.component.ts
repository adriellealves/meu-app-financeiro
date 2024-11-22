
import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receitas/receita.service';
import { DespesaService } from '../despesas/despesa.service';
import { Receita } from '../receitas/receita.model';
import { Despesa } from '../despesas/despesa.model';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  receitasTotais: number = 0;
  despesasTotais: number = 0;
  saldoLiquido: number = 0;
  ultimasTransacoes: (Receita | Despesa )[] = [];

  constructor(
    private receitaService: ReceitaService,
    private despesaService: DespesaService
  ) { }

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    this.receitaService.obterReceitas().subscribe((receitas: Receita[]) => {
      this.receitasTotais = receitas.reduce((acc, receita) => acc + receita.valor, 0);
      this.ultimasTransacoes = [...this.ultimasTransacoes, ...receitas];
    });

    this.despesaService.obterDespesas().subscribe((despesas: Despesa[]) => {
      this.despesasTotais = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
      this.ultimasTransacoes = [...this.ultimasTransacoes, ...despesas];
      this.saldoLiquido = this.receitasTotais - this.despesasTotais;
  
      this.inicializarGraficos();
      //this.ultimasTransacoes.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    });
  
  }

  inicializarGraficos() {
    const ctx = document.getElementById('graficoReceitasDespesas') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar', data: {
          labels: ['Receitas', 'Despesas'], datasets: [{
            label: 'Total', data: [this.receitasTotais, this.despesasTotais],
            backgroundColor: ['#4CAF50', '#F44336']
          }]
        },
        options: {
          responsive: true, scales: {
            y: {
              beginAtZero: true,
              ticks: { precision: 0.1 }
            }
          }
        }
      });
    }
  }
}
