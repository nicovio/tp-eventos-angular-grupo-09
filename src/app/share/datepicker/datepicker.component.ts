import { Component } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  // providers: [
  //   // The locale would typically be provided on the root module of your application. We do it at
  //   // the component level here, due to limitations of our example generation script.
  //   {provide: MAT_DATE_LOCALE, useValue: 'es-AR'},

  //   // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
  //   // `MatMomentDateModule` in your applications root module. We provide it at the component level
  //   // here, due to limitations of our example generation script.
  //   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  //   {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  // ]
})
export class DatePickerComponent {
  fecha: Date = new Date()
  
  startDate = this.fecha.getDate
  minDate = this.startDate
  // maxDate = this.fecha.setDate(this.fecha.getDate() + 1)

  constructor(private adapter: DateAdapter<any>) {}

  espaniol() {
    this.adapter.setLocale('es');
  }
}