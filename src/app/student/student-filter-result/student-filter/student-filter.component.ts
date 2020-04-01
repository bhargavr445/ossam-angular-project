import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from '../../../student/student.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../store';
import { STUDENT_FILTER_DATA } from '../../../actions';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.scss']
})
export class StudentFilterComponent implements OnInit {
  createForm: FormGroup;
  userDetails: any;
  filterData:any;
  constructor(private fb: FormBuilder,
              private service: StudentService, 
              private ngRedux: NgRedux<AppState>) {

  }


  ngOnInit() {
    this.studentForm();
    this.ngRedux.select(state =>{
      return state.student.studentFilterFormData
    }).subscribe(
      (data)=>{
       this.filterData=data;
       console.log(this.filterData);
       if(this.filterData!=null){
        this.patchValuesIntoForm(this.filterData);
       }
      }
    )
  }
  studentForm() {
    this.createForm = this.fb.group({
      firstName: [null, Validators.compose([Validators.required])],
      lastName: [null, Validators.compose([Validators.required])]
    })
  }
  submitLogin(){
 //console.log(this.createForm);
  if(this.createForm.valid){
    this.ngRedux.dispatch({type:STUDENT_FILTER_DATA,value:this.createForm.getRawValue()})
    this.service.create(this.createForm.getRawValue());
  } else {
    console.log('Form is not valid')
  }
}

patchValuesIntoForm(formData) {
  this.createForm.patchValue({
    firstName:formData.firstName,
    lastName: formData.lastName
  })
}
}