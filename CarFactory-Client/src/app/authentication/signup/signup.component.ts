import { Component } from '@angular/core';
import { SignUpModel } from '../models/signup.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
model: SignUpModel

  constructor(private authService: AuthService) {
    this.model = new SignUpModel('', '', '')
   }

  signUp() {
    this.authService
    .register(this.model)
    .subscribe()
  }
}
