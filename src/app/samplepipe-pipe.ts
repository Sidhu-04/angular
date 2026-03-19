import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplepipe'
})
export class SamplepipePipe implements PipeTransform {

  transform(value: string,name?: string): string {
    return "HELLO "+name+",Welcome to "+value;
  }

}
