import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'

import { SigninComponent } from './authentication/signin/signin.component'
import { SignupComponent } from './authentication/signup/signup.component'

import { AuthGuard } from './authentication/guards/auth.guard'
import { CarModule } from './car/car.module'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'car', canActivate: [AuthGuard], loadChildren: () => CarModule } 
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
