import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { DespesaService } from './despesa.service';
import { Despesa } from './despesa.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { APP_DATE_FORMATS, CustomDateAdapter } from '../utils/date-format';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-despesas',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    DatePipe,
  ],
  templateUrl: './despesas.component.html',
  styleUrl: './despesas.component.css'
})
export class DespesasComponent implements OnInit {
  descricao!: string;
  valor!: number;
  dataFeita: Date | null = null;
  dataPaga: Date | null = null;
  editMode = false;
  despesaEditando: Despesa | null = null;

  despesas: Observable<Despesa[]> | undefined;

  constructor(
    private despesaService: DespesaService,
    private datePipe: DatePipe,
  ) {}

  
  ngOnInit() {
    this.despesas = this.despesaService.obterDespesas();
    
  }

  formatarData(data: Date): string { return this.datePipe.transform(data, 'dd/MM/yyyy') || ''; }

  onSubmit() {
    if (this.descricao && this.valor && this.dataFeita) {
      if (this.editMode && this.despesaEditando) {
        this.despesaEditando.descricao = this.descricao;
        this.despesaEditando.valor = this.valor;
        this.despesaEditando.dataFeita = this.dataFeita || new Date();
        this.despesaEditando.dataPaga = this.dataPaga!;
        this.editMode = false;
        this.despesaEditando = null;
      } else {
        const novaDespesa = new Despesa(Math.random(), this.descricao, this.valor, this.dataFeita, this.dataPaga!);
        this.despesaService.adicionarDespesa(novaDespesa).subscribe(() => {
          this.despesas = this.despesaService.obterDespesas();
        });
      }
      this.descricao = '';
      this.valor = 0;
      this.dataFeita = null;

    }
  }

  editarDespesa(despesa: Despesa) {
    this.descricao = despesa.descricao;
    this.valor = despesa.valor;
    this.dataFeita = despesa.dataFeita;
    this.dataPaga = despesa.dataPaga;
    this.editMode = true;
    this.despesaEditando = despesa;
  }
  removerDespesa(id: number) {
    this.despesaService.removerDespesa(id).subscribe(() => {
      this.despesas = this.despesaService.obterDespesas();
    });
  }
}
