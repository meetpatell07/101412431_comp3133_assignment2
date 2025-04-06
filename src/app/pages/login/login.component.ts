import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../../services/graphql.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private gqlService: GraphqlService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
  
      this.gqlService.login(username, password).subscribe({
        next: (res: any) => {
          const token = res.data.login.token;
          localStorage.setItem('token', token);
          console.log(token)
          this.router.navigate(['/employees']);  // Redirect to employees page after successful login
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Login failed. Check console.');
        }
      });
    }
  }
}
