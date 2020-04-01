import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store';

@Component({
  selector: 'app-student-filter-result',
  templateUrl: './student-filter-result.component.html',
  styleUrls: ['./student-filter-result.component.scss']
})
export class StudentFilterResultComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>
  ) { }

  ngOnInit() {
     }


}
