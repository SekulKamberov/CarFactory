import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarRoutingModule } from './car.routing';
import { CarService } from './car.service';
import { CreateCarComponent } from './create-car/create-car.component';

import { CustomMinValidatorDirective } from '../directives/custom-min-validator.directive';
import { CustomMaxValidatorDirective } from '../directives/custom-max-validator.directive';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { EditCarComponent } from './edit-car/edit-car.component';



@NgModule({
  declarations: [
    AllCarsComponent,
    CreateCarComponent,
    CustomMinValidatorDirective,
    CustomMaxValidatorDirective,
    CarDetailsComponent,
    EditCarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarRoutingModule
  ],
  providers: [
    CarService
  ]
})
export class CarModule { }
