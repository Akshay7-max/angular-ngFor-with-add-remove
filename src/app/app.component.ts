import { Component } from '@angular/core';
import { Employee } from "./employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';

  employees: Employee[] = [
    new Employee(1, "Ram", 4000),
    new Employee(2, "Shyam", 5000),
    new Employee(3, "Krishna", 6000),
    new Employee(4, "Hari", 7000)
  ];

  newemployee:Employee = new Employee(null, null, null);

  onInsertClick() {
    this.employees.push(new Employee(this.newemployee.empid, this.newemployee.empname, this.newemployee.salary));

    this.newemployee.empid = null;
    this.newemployee.empname = null;
    this.newemployee.salary = null;
  }

  onDeleteClick(n:any) {
    if (confirm("Are you sure to delete this employee?")) {
      this.employees.splice(n, 1);
    }
  }
}
