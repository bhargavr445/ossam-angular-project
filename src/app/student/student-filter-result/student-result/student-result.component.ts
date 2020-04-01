import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../store';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit {
  studentResults: any;
  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.ngRedux.select(state => {
      return state.student.studentResultData;
     }).subscribe(
       (result)=>{
        this.studentResults=result;
 
       }
     )
 
  }

}
