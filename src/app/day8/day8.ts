import { Component } from '@angular/core';
import { Mediatorapi } from '../mediatorapi';
import { Router } from '@angular/router';


@Component({
  selector: 'app-day8',
  imports: [],
  templateUrl: './day8.html',
  styleUrl: './day8.css',
})
export class Day8 {

mydata: any;
constructor(private mediator:Mediatorapi, private rot:Router){}
ngOnInit(): void{

    this.mediator.getTodos().subscribe((data:any) => {
      console.log(data);
      this.mydata =data
 });
}
  deleteTodo(id: number){
    console.log("Deleting TODO with id "+ id);
    this.mediator.deleteTodos(id).subscribe((response: any) =>{
    console.log(response);

    alert("TODO DELETED ");
  
  this.ngOnInit();
  });
}


  editTodo(id: number){
    console.log("editing TODO with id "+ id);
    this.mediator. getTodoById(id).subscribe((data: any) =>{
    console.log(data);

    alert(" Editing TODO with id :" +id);
  
  this.rot.navigate(['/day9',id]);
  });
}
}
