import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  constructor() { }

  registerUser(userDetails: User): Observable<User> {
    const existing = this.users.find(u => u.email === userDetails.email);
    if (existing) {
      return throwError(() => new Error('User already exists'));
    }
    this.users.push(userDetails);
    localStorage.setItem('users', JSON.stringify(this.users));
    return of(userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    const user = this.users.filter(u => u.email === email);
    return of(user);
  }

}
