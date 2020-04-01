import { Injectable } from '@angular/core';
import {HttpBackendClientService} from './HttpConfig/http-backend-client';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,
              private httpBackend: HttpBackendClientService) { }

  add(n1, n2) {
    return n1 + n2;
  }

  sub(n1, n2) {
    return n1 - n2;
  }

  logIn(formValues: any) {
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$', formValues);
    return this.httpBackend.post('http://localhost:2000/api/el/login', formValues);
  }

  findAllCourses() {
    return this.http.get<any>('/el/signup').subscribe((data) => {
      console.log('test', data);
      return data;
    }, err => {
      console.log(err);
    });
  }

  logoutUser = () =>{
    return this.http.post('http://localhost:2000/api/el/logout',{});
  }
}
