import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';

export const routes: Routes = [ // Adicionar 'export'
  { path: 'despesas', component: DespesasComponent },
  { path: '', redirectTo: '/despesas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
