import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caixaAlta'
})
export class MeuPipePipe implements PipeTransform {

  transform(value: string | undefined) {
    if (value) {
      return value.toUpperCase();
    }
    return "";
  }

}
