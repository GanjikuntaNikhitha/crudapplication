import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departmentList : AngularFireList<any>;
  array: any[] | undefined;
  constructor(public firebase : AngularFireDatabase,) { 
    // here departments is the node
    this.departmentList = this.firebase.list('departments');
    this.departmentList.snapshotChanges().subscribe((list)=>{
      this.array = list.map((item)=>{
        return {
          key : item.key,
          ...item.payload.val()
        }
      })
    })
  }

}
