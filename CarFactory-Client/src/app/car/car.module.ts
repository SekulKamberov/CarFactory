import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarRoutingModule } from './car.routing';
import { CarService } from './car.service';



@NgModule({
  declarations: [],
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
