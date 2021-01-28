import { Component} from '@angular/core';
import { CreateCarModel } from '../models/create-car.model';
import { NgForm } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {
public bindingModel: CreateCarModel

  constructor(private carService: CarService) { 
    this.bindingModel = new CreateCarModel('', '', '', null, null, '', null, '', null, '')
  }

  create (form: NgForm) {
    if (form.invalid) {
      return
    } 

     this.carService.createCar(this.bindingModel).subscribe()
  }
}
