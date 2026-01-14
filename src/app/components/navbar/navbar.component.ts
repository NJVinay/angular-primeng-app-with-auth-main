import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private router: Router) { }

  get currentUser() {
    const u = localStorage.getItem('loggedInUser');
    return u ? JSON.parse(u) : null;
  }

  isLoginPage() {
    return this.router.url === '/login';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goHome() {
    this.router.navigate(['home']);
    this.isMenuOpen = false;
  }

  goLogin() {
    this.router.navigate(['login']);
    this.isMenuOpen = false;
  }

  goRegister() {
    this.router.navigate(['register']);
    this.isMenuOpen = false;
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    sessionStorage.clear();
    this.router.navigate(['login']);
    this.isMenuOpen = false;
  }
}
