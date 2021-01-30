import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CarModel } from '../models/car.model'
import { CarService } from '../car.service' 

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css']
})
export class MyCarComponent implements OnInit {
  cars$: Observable<CarModel[]>
  pageSize = 3
  maxSize = 9
  directionLinks="true"
  autoHide="true"
  currentPage = 1

  constructor(private carService: CarService) { }

  ngOnInit(){
    this.cars$ = this.carService.myCars()
  }

  deleteItem(id: string) {
    this.carService.deleteCar(id)
      .subscribe(() => {
        this.cars$ = this.carService.myCars()
      })
  }

  changePage(page) {
    this.currentPage = page
  }

}
