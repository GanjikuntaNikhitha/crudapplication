import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/shared/departments.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  departments =[
    {id:1,name:"Angular"},
    {id:2,name:"React"},
    {id:3,name:"Firebase"},
    {id:4,name:"Azure"},
    {id:5,name:"Javascript"},
    {id:6,name:"CSE"}
  ]
  constructor(public empService : EmployeeService,public departmentService : DepartmentsService) { }

  ngOnInit(): void {
    this.empService.getEmployees();
  }

  clear(){
    this.empService.form.reset();
    this.empService.initializeFromGroup();
  }

  onSubmit(){
    if( this.empService.form.valid){
      this.empService.insertEmployees(this.empService.form.value);
      this.empService.form.reset();
      this.empService.initializeFromGroup();
    }
  }


}
