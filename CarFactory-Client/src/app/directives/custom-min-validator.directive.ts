import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, Form } from '@angular/forms';

@Directive({
  selector: '[customMin] [FormControlName], [customMin] [FormControl], [customMin] [ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinValidatorDirective, multi: true}]
})
export class CustomMinValidatorDirective implements Validator {
  @Input()
  customMin: number
  
  validate(c: FormControl): {[key: string]: any} {
    const v = c.value
    return ( v < this.customMin) ? {'customMin': true} : null
  }
}
