import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SamplepipePipe } from '../samplepipe-pipe';

@Component({
  selector: 'app-day4',
  imports: [JsonPipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe,SamplepipePipe],
  templateUrl: './day4.html',
  styleUrl: './day4.css',
})
export class Day4 {
  employee={
    name:'Sidhu',
    dob:"03-31-2004",
    salary:1000000000
  }

}
