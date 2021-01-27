import { Component } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  dropdownLi = 'nav-item dropdown'
  dropdownMenu = 'dropdown-menu'

  constructor(
    public authService: AuthService
    ) { }

  logout()  {
    this.authService.logout()
  }

  expand() {
    this.dropdownLi.endsWith('show') ? 
    this.dropdownLi = 'nav-item dropdown' : 
    this.dropdownLi = 'nav-item dropdown show'

    this.dropdownMenu.endsWith('show') ? 
    this.dropdownMenu = 'dropdown-menu' : 
    this.dropdownMenu = 'dropdown-menu show'
  }
}
