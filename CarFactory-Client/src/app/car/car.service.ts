import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CarModel } from './models/car.model'
import { CreateCarModel } from './models/create-car.model'

const createUrl = 'http://localhost:5000/car/create'
const allUrl = 'http://localhost:5000/car/all'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  createCar(model: CreateCarModel) {
    return this.http.post(createUrl, model)
  }

  getAllCars() {
    return this.http.get<CarModel[]>(allUrl)
  }



}
