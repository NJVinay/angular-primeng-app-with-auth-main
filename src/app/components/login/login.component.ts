import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private msgService: MessageService
  ) { }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() { return this.loginForm.controls['password']; }

  loginUser() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.isLoading = true;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        this.isLoading = false;
        if (response.length > 0 && response[0].password === password) {
          // persist both a minimal session flag and full user for UI
          sessionStorage.setItem('email', email as string);
          localStorage.setItem('loggedInUser', JSON.stringify(response[0]));
          this.router.navigate(['/home']);
        } else {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
        }
      },
      error => {
        this.isLoading = false;
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )
  }
}
