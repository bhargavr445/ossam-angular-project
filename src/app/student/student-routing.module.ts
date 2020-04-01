import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { StudentFilterResultComponent } from '../student/student-filter-result/student-filter-result.component';


const routes: Routes = [
  {path:'', component: StudentComponent , 
 children:[
   {path: 'filter', component:StudentFilterResultComponent }
 ]}
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
