import { CUSTOM_ELEMENTS_SCHEMA, Inject, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormControlName,
    FormControl,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Inject
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
