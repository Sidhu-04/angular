import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mediatorapi {
  
  constructor(private http:HttpClient){}
  apiUrl:string="http://127.0.0.1:8000/todo/";

  saveTodo(data:any){
    return this.http.post(this.apiUrl,data);
  }
  getTodos(){
    return this.http.get(this.apiUrl);
  }
  
  deleteTodos(id:number){
    return this.http.delete(this.apiUrl + id + "/");
  }

  getTodoById(id:number){
    return this.http.get(this.apiUrl + id + "/");
  }
  updateTodo(id: number, data: any) {
    return this.http.put(this.apiUrl + id + "/", data);
  }
}



