import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormGroup, FormControl,Validators } from '@angular/forms';
// store date in fire base
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  form : FormGroup = new FormGroup({
    key : new FormControl(null),
    firstName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email),
    mobile : new FormControl('',[Validators.required, Validators.minLength(10)]),
    city : new FormControl(''),
    gender : new FormControl('1'),  // male:1 female:2 others:3
    department : new FormControl('0'), //select 1st element from the list
    hireDate : new FormControl(''),
    isPermanent : new FormControl(false), //check box by default not selected
  })

  employeeList : AngularFireList<any> | undefined;
  
  constructor(public firebase : AngularFireDatabase, public datePipe:DatePipe) { }

  initializeFromGroup(){
    this.form.setValue({
      key : null,
      firstName:'',
      mobile:'',
      city:'',
      gender :'1',
      department:0,
      hireDate:'',
      isPermanent : false
    })
  }

  getEmployees(){
    //get the values from firebase database
    this.employeeList = this.firebase.list('employees');
    //snapshotChanges returns the observable those who are using this they have to subscribe
    return this.employeeList.snapshotChanges();
  }

  insertEmployees(emp:any){
    this.employeeList?.push({
      firstName             :emp.firstName,
      mobile                :emp.mobile,
      city                  :emp.city,
      gender                :emp.gender,
      department            :emp.department,
      hireDate              :emp.hireDate ===''?'': this.datePipe.transform(emp.hireDate,'yyyy-MM-dd'),
      isPermanent           :emp.isPermanent
    })
  }

  updateEmployee(emp:any){
    this.employeeList?.update(emp.key,{
      firstName             :emp.firstName,
      mobile                :emp.mobile,
      city                  :emp.city,
      gender                :emp.gender,
      department            :emp.department,
      hireDate              :emp.hireDate ===''?'': this.datePipe.transform(emp.hireDate,'yyyy-MM-dd'),
      isPermanent           :emp.isPermanent
    })
  }

  deleteEmployee(key:string){
    this.employeeList?.remove(key);
  }
}
