import { BrowserModule } from '@angular/platform-browser' 
import { NgModule } from '@angular/core' 

import { AppRoutingModule } from './app-routing' 
import { AppComponent } from './app.component' 

import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModul } from './authentication/auth.module';
import { HomeComponent } from './home/home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModul
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
