import { Component } from '@angular/core';
import { ReceitaService } from './receita.service';
import { Receita } from './receita.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule,DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { APP_DATE_FORMATS, CustomDateAdapter } from '../utils/date-format';



@Component({
  selector: 'app-receitas',
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
    MatNativeDateModule],
  providers: [ 
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    DatePipe
   ],
  templateUrl: './receitas.component.html',
  styleUrl: './receitas.component.css'
})
export class ReceitasComponent {
  descricao!: string;
  valor!: number;
  data: Date | null = null;

  constructor(
    private receitaService: ReceitaService,
    private datePipe: DatePipe
  ) { }

  get receitas() {
    return this.receitaService.obterReceitas();
  }

  formatarData(data: Date): string { return this.datePipe.transform(data, 'dd/MM/yyyy') || ''; }

  onSubmit() {
    if (this.descricao && this.valor && this.data) {
      const novaReceita = new Receita(Math.random(), this.descricao, this.valor, this.data);
      this.receitaService.adicionarReceita(novaReceita);
      this.descricao = '';
      this.valor = 0;
      this.data = null;
    }
  }

  removerReceita(id: number) {
    this.receitaService.removerReceita(id);
  }
}
