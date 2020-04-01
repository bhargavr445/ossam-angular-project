import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginResp: any;
  constructor(private fb: FormBuilder,
              private appService: AppService) { }

  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [null],
      password: [null]
    }, {
        // validator: [this.checkValid]
      });


  }

  
//     const stu = [{id:10, name:'bhargav'}, {id:11, name:'philip'}];
//     //stu = [{id:20, name:'bhargav'}, {id:11, name:'philip'}];
//     //stu.push({id:20, name:'bhargav'});

// if(true){
// }
//     debugger;
//     function foo() {
//       debugger;
//       let x=10;
//       console.log('foo');

//       function bar() {
//         console.log(x,'bar');
//       }
//       return bar;
//     }
//     foo();
loginUser() {
    console.log(this.loginForm.getRawValue());
    this.appService.logIn(this.loginForm.getRawValue())
    .subscribe((data) => {
      this.loginResp = data;
     // console.log(this.loginResp.token);
      sessionStorage.setItem('Authorization', this.loginResp.token);
      
    }, err => {
      console.log('Failed Login Response', err);
    });
  }

  logoutUser = () => {
    this.appService.logoutUser().subscribe( (data) =>{
      console.log('Logged out', data);
    }, err => {
      console.log('Logged out Error', err);

    } )
  }

}
