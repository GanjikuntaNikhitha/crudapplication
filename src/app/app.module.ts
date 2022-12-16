import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import Firebase modules + environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './main/employee/employee.component';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { EmployeeService } from './shared/employee.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentsService } from './shared/departments.service';
import { NotificationService } from './shared/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService,DatePipe,DepartmentsService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
