import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mediatorapi } from '../mediatorapi';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day9',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './day9.html',
  styleUrl: './day9.css',
})
export class Day9 {

  constructor(private rut: ActivatedRoute,
              private mediator: Mediatorapi,
              private router:Router) {}

  idnum: any;
  mydata: any = {};

  ngOnInit(): void {

    const id = this.rut.snapshot.paramMap.get('id');
    console.log('Editing todo with id :' + id);

    this.idnum = id;

    this.mediator.getTodoById(this.idnum)
      .subscribe((data: any) => {
        console.log(data);
        this.mydata = data;
      });
  }

updateData() {
  this.mediator.updateTodo(this.idnum, this.mydata)
    .subscribe(() => {
      alert("Updated Successfully");
      this.router.navigate(['/day8']);  
    });
}}
