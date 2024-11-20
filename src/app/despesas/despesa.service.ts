import { Injectable } from '@angular/core';
import { Despesa } from './despesa.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private apiUrl = 'http://localhost:3000/despesas';

  constructor(private http: HttpClient) {}

  adicionarDespesa(despesa: Despesa):Observable<Despesa> {
    return this.http!.post<Despesa>(this.apiUrl, despesa);
  }

  obterDespesas(): Observable<Despesa[]> {
    return this.http!.get<Despesa[]>(this.apiUrl);
  }

  atualizarDespesa(despesa: Despesa): Observable<Despesa> { 
    const url = `${this.apiUrl}/${despesa.id}`; 
    return this.http!.put<Despesa>(url, despesa); 
}
  removerDespesa(id: number):Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http!.delete<void>(url);
  }
}
