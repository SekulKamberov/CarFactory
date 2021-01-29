import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CarModel } from '../models/car.model'
import { CarService } from '../car.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car$: Observable<CarModel>
  id: string

  constructor(private route: ActivatedRoute, private carService: CarService) { 
    this.id = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.car$ = this.carService.getCarDetails(this.id)
  }
}
