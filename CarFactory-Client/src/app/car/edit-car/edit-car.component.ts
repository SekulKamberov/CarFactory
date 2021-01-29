import { Component, OnInit} from '@angular/core'
import { NgForm} from '@angular/forms'
import { ActivatedRoute, Route, Router} from '@angular/router'
import { CarService } from '../car.service'
import { ToastrService } from '../../../../node_modules/ngx-toastr'
import { CarModel } from '../models/car.model' 

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  bindingModel: CarModel

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private carService: CarService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.carService
      .getCarById(id)
      .subscribe(data => {
        this.bindingModel = data
      }) 
  }

  edit(form: NgForm) {
    if(form.invalid) {
      return
    }

    this.carService
      .editCar(this.bindingModel.id, this.bindingModel)
      .subscribe(() => {
        this.toastr.success('Submited successfuly')
        this.router.navigate(['car/all'])
      })
  }

}
