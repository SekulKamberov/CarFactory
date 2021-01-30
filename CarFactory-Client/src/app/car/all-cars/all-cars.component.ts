import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from '../models/car.model';
import { CarService } from '../car.service';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';



@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  cars$: Observable<CarModel[]>
  pageSize = 3
  maxSize = 9
  directionLinks="true"
  autoHide="true"
  currentPage = 1

  constructor(
    private carService: CarService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cars$ = this.carService.getAllCars()
  }

  deleteItem(id: string) {
    this.carService
      .deleteCar(id)
      .subscribe(() => {
        this.toastr.success('the car was deleted')
        this.cars$ = this.carService.getAllCars()
      })
  }

  changePage(page) {
    this.currentPage = page
  }
 
}
