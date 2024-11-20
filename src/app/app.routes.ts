import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [ // Adicionar 'export'
{ path: 'home', component: HomeComponent
}, { path: '', component: HomeComponent },
{ path: 'despesas', component: DespesasComponent },
{ path: 'receitas', component: ReceitasComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
