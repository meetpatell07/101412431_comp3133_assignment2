import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GraphqlService } from '../../../services/graphql.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  addEmployeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gqlService: GraphqlService,
    private router: Router
  ) {
    this.addEmployeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      date_of_joining: ['', Validators.required],
      department: ['', Validators.required],
      employee_photo: ['', Validators.required]
    });
  }

  onAddEmployee() {
    if (this.addEmployeeForm.valid) {
      const {
        first_name,
        last_name,
        email,
        gender,
        designation,
        salary,
        date_of_joining,
        department,
        employee_photo
      } = this.addEmployeeForm.value;

      this.gqlService.addEmployee(
        first_name,
        last_name,
        email,
        gender,
        designation,
        salary,
        date_of_joining,
        department,
        employee_photo
      ).subscribe({
        next: (res: any) => {
          console.log('Employee added:', res);
          this.router.navigate(['/employee-list']); // Redirect after adding
        },
        error: (err) => {
          console.error('Error adding employee', err);
          alert('Error adding employee. Check console.');
        }
      });
    }
  }
}
