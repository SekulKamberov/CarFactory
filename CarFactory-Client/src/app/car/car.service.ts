import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CarModel } from './models/car.model'
import { CreateCarModel } from './models/create-car.model'

const createUrl = 'http://localhost:5000/car/create'
const allUrl = 'http://localhost:5000/car/all'
const detailsUrl = 'http://localhost:5000/car/details/'
const editCarUrl = 'http://localhost:5000/car/edit/'
const carByIdUrl = 'http://localhost:5000/car/'
const deleteURL = 'http://localhost:5000/car/delete/'
const myCarsURL = 'http://localhost:5000/car/mine'


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

  getCarDetails(id: string) {
    return this.http.get<CarModel>(detailsUrl + id)
  }

  getCarById(id: string) {
    return this.http.get<CarModel>(carByIdUrl + id)
  }

  editCar(id: string, model: CarModel) {
    return this.http.put(editCarUrl + id, model)
  }

  deleteCar(id: string) {
    return this.http.delete(deleteURL + id)
  }

  myCars() {
    return this.http.get<CarModel[]>(myCarsURL)
  }

}
