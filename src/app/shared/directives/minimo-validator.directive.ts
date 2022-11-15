import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoValidatorDirective,
      multi: true,
    },
  ],
})
export class MinimoValidatorDirective implements Validator {
  @Input("valorMinimo") valorMinimo = "0";

  constructor() {}

  validate(c: FormControl) {
    let v = +c.value;

    if (isNaN(v)) {
      return { minimo: true, requiredValue: 18 };
    }

    if (v < +this.valorMinimo) {
      return { minimo: true, requiredValue: 18 };
    }

    return null;
  }
}
