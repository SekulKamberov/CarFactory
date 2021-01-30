import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AllCarsComponent } from './all-cars/all-cars.component'
import { CreateCarComponent } from './create-car/create-car.component'
import { CarDetailsComponent } from './car-details/car-details.component'
import { EditCarComponent } from './edit-car/edit-car.component'
import { MyCarComponent } from './my-car/my-car.component'

const carRoutes: Routes = [   
    { path: 'all', component: AllCarsComponent},
    { path: 'create', component: CreateCarComponent},
    { path: 'details/:id', component: CarDetailsComponent},
    { path: 'edit/:id', component: EditCarComponent},
    { path: 'my', component: MyCarComponent}
]

@NgModule({
    imports: [RouterModule.forChild(carRoutes)],
    exports: [RouterModule]
})
export class CarRoutingModule {}
