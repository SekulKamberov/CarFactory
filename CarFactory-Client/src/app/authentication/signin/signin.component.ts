import { Component } from '@angular/core';
import { SignInModel } from '../models/signin.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
 model: SignInModel

  constructor(private authService: AuthService) { 
    this.model = new SignInModel('', '')
  }

  signIn() {
    this.authService
    .login(this.model)
    .subscribe()
  }
}
