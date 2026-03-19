import { Component } from '@angular/core';

@Component({
  selector: 'app-day3',
  imports: [],
  templateUrl: './day3.html',
  styleUrl: './day3.css',
})
export class Day3 {
is_visible:boolean=false;
time:number=2;

places :string[] =['New York', 'London','Paris','Tokyo','Sydney'];

students:any[] =[
  { name: "Alice", Age:20, Grade:"A"},
  { name: "Anjay", Age:23, Grade:"C"},
  { name: "Sidhu", Age:22, Grade:"C"},

];

day:string = '1';

}
