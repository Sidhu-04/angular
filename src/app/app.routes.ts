import { Routes } from '@angular/router';
import { Day2} from './day2/day2';
import { Day1} from './day1/day1';
import { Daytwo } from './daytwo/daytwo';
import { Day3 } from './day3/day3';
import { Day4 } from './day4/day4';
import { Day5 } from './day5/day5';
import { TodoCreate } from './todo-create/todo-create';
import { Day8 } from './day8/day8';
import { Day9 } from './day9/day9';


export const routes: Routes = [
    {path:"D1",component:Day1},
    {path:"DTWO",component:Daytwo},
    {path:"D2",component:Day2},
    {path:"D3",component:Day3},
    {path:"D4",component:Day4},
    {path:"D5",component:Day5}, 
    {path:"todo-create",component:TodoCreate}, 
    {path:"day8",component:Day8}, 
    {path:"day9/:id",component:Day9}, 

];
