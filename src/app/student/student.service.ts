import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { STUDENT_RESULT_DATA } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //studentValue:any;
  userDetails:any;

  constructor(private http: HttpClient, private ngRedux: NgRedux<AppState>) { }
create(studentValue){

return this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
  (userDetails) => {
  this.userDetails = userDetails;
  console.log(this.userDetails);
  this.ngRedux.dispatch({type:STUDENT_RESULT_DATA,value:this.userDetails});
}
);;
}
}
