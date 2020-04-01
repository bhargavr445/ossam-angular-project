import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from '../student/student.component';
import { StudentFilterResultComponent } from './student-filter-result/student-filter-result.component';
import { StudentFilterComponent } from '../student/student-filter-result/student-filter/student-filter.component';
import { StudentResultComponent } from '../student/student-filter-result/student-result/student-result.component';



@NgModule({
  declarations: [StudentComponent, StudentFilterResultComponent, StudentFilterComponent,StudentResultComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
