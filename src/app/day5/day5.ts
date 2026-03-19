import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-day5',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './day5.html',
  styleUrl: './day5.css',
})
export class Day5 {
  register(val: any){
    console.log(val);
  }
}

  // regFrom1:FormGroup;
  // constructor(private formBuilder: FormBuilder){
  // this.regForm1=FormBuilder.group({
  //   myname: new FormControl(),
  //   myemail: new FormControl(),
  //   myphone: new FormControl(),
  // })
  // }



