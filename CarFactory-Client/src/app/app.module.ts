import { BrowserModule } from '@angular/platform-browser' 
import { NgModule } from '@angular/core' 

import { AppRoutingModule } from './app-routing' 
import { AppComponent } from './app.component' 

import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModul } from './authentication/auth.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';  

import { JWTInterceptor, ErrorInterceptor } from './interceptors'
import { CarModule } from './car/car.module';
import { CustomMin } from './custom-min.validator.directive';
import { CustomMax } from './custom-max.validator.directive';
import { CustomMinValidatorDirective } from './directives/custom-min-validator.directive';
import { CustomMaxValidatorDirective } from './directives/custom-max-validator.directive';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    CustomMin.ValidatorDirective,
    CustomMax.ValidatorDirective,
    CustomMinValidatorDirective,
    CustomMaxValidatorDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule, 
    ToastrModule.forRoot(),
    AuthModul,
    CarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
