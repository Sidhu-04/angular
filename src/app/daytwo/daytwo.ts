import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-daytwo',
  imports: [FormsModule],
  templateUrl: './daytwo.html',
  styleUrl: './daytwo.css',
})
export class Daytwo {
  num1: number = 0;
  num2: number = 0;

  msg='Hello,from Daytwo Component';
  type="radio";

  display(s:string){
    alert("Button Clicked");
    console.log("Button Clicked");
    console.log(s);
  }
  changetext:string="Initial Text"
  newtext:string="HELLO"
}

