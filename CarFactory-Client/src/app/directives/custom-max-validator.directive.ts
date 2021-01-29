import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[customMax] [FormControlName], [customMax] [FormControl], [customMax] [ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxValidatorDirective, multi: true}]
})
export class CustomMaxValidatorDirective implements Validator {
  @Input()
  customMax: number
  
  validate(c: FormControl): {[key: string]: any} {
    const v = c.value
    return ( v > this.customMax) 
    ? {'customMax': true} 
    : null
  }
}

