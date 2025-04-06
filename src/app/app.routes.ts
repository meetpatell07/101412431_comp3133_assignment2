import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { AuthGuard } from './guards/auth.guard'; // Import the auth guard



export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirect to login if accessing the root
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] }, // Protect employees route with AuthGuard
    // add other routes here later like signup, employees, etc.
  ];

  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}