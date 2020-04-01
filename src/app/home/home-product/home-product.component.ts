import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../store';
import { NgRedux } from '@angular-redux/store';
@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})
export class HomeProductComponent implements OnInit, OnDestroy {


  myRes: any;
  constructor(private ngRedux: NgRedux<AppState>) { 
    
  }

  ngOnInit() {

    this.ngRedux.select(state => {
      return state.home.resultList
    }).subscribe(data => {
      console.log(data);
      this.myRes = data;
    })

  }

  ngOnDestroy() {
    console.log('Prod Destroyed')
  }

}
