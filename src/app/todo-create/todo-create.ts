import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mediatorapi } from '../mediatorapi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  imports:[FormsModule],
  templateUrl: './todo-create.html',
  styleUrl: './todo-create.css',
})
export class TodoCreate {
constructor(private mediatorapi: Mediatorapi,private route:Router){}
  create(tododata:any){
    console.log(tododata)

    this.mediatorapi.saveTodo(tododata).subscribe(
     (response:any) =>{
      console.log("To-Do item saved successfully :",response);
      alert("TO-DO item saved successfully!..")
      this.route.navigate(['/day8'])
     },
     (error:any) => {
      console.error("Error saving To-Do item :",error);
     }
     );
    
  }

}
