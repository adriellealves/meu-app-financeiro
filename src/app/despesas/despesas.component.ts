import { Component } from '@angular/core';
import { DespesaService } from './despesa.service';
import { Despesa } from './despesa.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule,DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { APP_DATE_FORMATS, CustomDateAdapter } from '../utils/date-format';
@Component({
  selector: 'app-despesas',
  standalone: true,
  imports: [
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
    DatePipe
   ],
  templateUrl: './despesas.component.html',
  styleUrl: './despesas.component.css'
})
export class DespesasComponent {
  descricao!: string;
  valor!: number;
  data: Date | null = null;

  constructor(
    private despesaService: DespesaService,
    private datePipe: DatePipe
  ) {}
  get despesas() { return this.despesaService.obterDespesas(); }

  formatarData(data: Date): string { return this.datePipe.transform(data, 'dd/MM/yyyy') || ''; }

  onSubmit() {
    if (this.descricao && this.valor && this.data) {
      const novaDespesa = new Despesa(Math.random(), this.descricao, this.valor, this.data);
      this.despesaService.adicionarDespesa(novaDespesa);
      this.descricao = '';
      this.valor = 0;
      this.data = null;
    }
  }
  removerDespesa(id: number) { this.despesaService.removerDespesa(id); }
}
