import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AllCarsComponent } from './all-cars/all-cars.component'
import { CreateCarComponent } from './create-car/create-car.component'


const carRoutes: Routes = [   
    { path: 'all', component: AllCarsComponent},
    { path: 'create', component: CreateCarComponent}
]

@NgModule({
    imports: [RouterModule.forChild(carRoutes)],
    exports: [RouterModule]
})
export class CarRoutingModule {}
