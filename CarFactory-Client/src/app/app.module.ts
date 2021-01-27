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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule, 
    ToastrModule.forRoot(),
    AuthModul
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
