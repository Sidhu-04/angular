import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
// import { Day1 } from './day1/day1';
// import { Day2 } from './day2/day2';
// import { Daytwo } from './daytwo/daytwo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],//Day1,Day2,Daytwo
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myanguproject');
}
