import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(private router: Router) { }

    get currentUser() {
        const u = localStorage.getItem('loggedInUser');
        return u ? JSON.parse(u) : null;
    }

    goHome() {
        this.router.navigate(['home']);
    }

    goCreate() {
        this.router.navigate(['create']);
    }

    logout() {
        localStorage.removeItem('loggedInUser');
        sessionStorage.clear();
        this.router.navigate(['login']);
    }
}
