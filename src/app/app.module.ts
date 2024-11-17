import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
