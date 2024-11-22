import { Injectable } from '@angular/core';
import { Receita } from './receita.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private apiUrl = 'http://localhost:3000/receitas';

  constructor(private http: HttpClient) {}

  adicionarReceita(receita: Receita): Observable<Receita> {
    //this.receitas.push(receita);
    return this.http!.post<Receita>(this.apiUrl, receita);
  }

  obterReceitas(): Observable<Receita[]> {
    return this.http!.get<Receita[]>(this.apiUrl);
  }

  atualizarReceita(receita: Receita): Observable<Receita> {
    const url = `${this.apiUrl}/${receita.id}`;
    return this.http!.put<Receita>(url, receita);
  }

  removerReceita(id: number):Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http!.delete<void>(url);
  }
}
