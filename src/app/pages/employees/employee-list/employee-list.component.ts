import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlService } from '../../../services/graphql.service';
import { CommonModule } from '@angular/common';  // Add this import

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  imports: [CommonModule],  // Include CommonModule here
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  constructor(private gqlService: GraphqlService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  // Method to add a new employee
  addEmployee() {
    this.router.navigate(['/add-employee']);  // Navigate to a form for adding new employee
  }

  // Method to edit an employee
  editEmployee(employeeId: string) {
    this.router.navigate(['/employee-detail', employeeId]);  // Navigate to employee detail page
  }


  getEmployees(): void {
    this.gqlService.getAllEmployees().subscribe((res: any) => {
      this.employees = res.data.getAllEmployees;
    });
  }

  viewEmployee(id: string): void {
    this.router.navigate(['/employee', id]); // Navigate to employee detail page
  }

  deleteEmployee(id: string): void {
    this.gqlService.deleteEmployee(id).subscribe(() => {
      this.getEmployees(); // Refresh the list after deletion
    });
  }
}
