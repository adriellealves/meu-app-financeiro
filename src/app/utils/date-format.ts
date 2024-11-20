import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';
@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  // Personalizando o formato de exibição da data
  override format(date: Date, displayFormat: Object): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${this._to2digit(day)}/${this._to2digit(month)}/${year}`;
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
export const APP_DATE_FORMATS = { 
  parse: { dateInput: 'DD/MM/YYYY', }, 
  display: { dateInput: 'DD/MM/YYYY',
  monthYearLabel: 'MMM YYYY', 
  dateA11yLabel: 'DD/MM/YYYY', 
  monthYearA11yLabel: 'MMMM YYYY', },
 };