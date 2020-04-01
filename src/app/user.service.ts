import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
// import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { PRODUCT_DATA, PERM_DATA } from './actions';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  myProducts: any;

  private filterText = new ReplaySubject<any>(2);
  cast = this.filterText.asObservable();

  constructor(private http: HttpClient, private ngRedux: NgRedux<AppState>) { }

  updatedFilterText(filterKey) {
    this.filterText.next(filterKey);
  }

 getProducts() {
    //return 
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
        (data) => {
          this.myProducts = data;
          this.ngRedux.dispatch({type: PRODUCT_DATA, value: this.myProducts});
          this.ngRedux.dispatch({type: PERM_DATA, value: this.myProducts});
        }
    );
  }
}
