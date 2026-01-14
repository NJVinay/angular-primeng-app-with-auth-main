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

  errorMessage: string | null = null;

  loginUser() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.errorMessage = null;
    this.isLoading = true;
    this.authService.getUserByEmail(email as string).subscribe(
      response => {
        this.isLoading = false;
        if (response.length > 0 && response[0].password === password) {
          sessionStorage.setItem('email', email as string);
          localStorage.setItem('loggedInUser', JSON.stringify(response[0]));
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = 'Email or password is wrong';
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
        }
      },
      error => {
        this.isLoading = false;
        this.errorMessage = 'Something went wrong';
        this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      }
    )
  }
}
