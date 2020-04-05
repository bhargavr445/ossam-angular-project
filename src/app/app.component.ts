import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: any;
  products: any;
  constructor(private userService: UserService) {
  }
  title = 'ossam-angular-project';
  ngOnInit() {



    this.userService.cast.subscribe((subData) => {
      const a = 10;
      console.log(subData);

    });

    // var obj = new this.MyObj('fn', '1', 'st', 'g', 'sc');

    //  this.check();
    //   setTimeout(function(){ alert("Hello"); }, 3000);

    //   var info = {"city": "Fairfax"};

    //   info.city = undefined;

    //   console.log(info);
  }
  updateUser() {

    this.userService.updatedFilterText(this.username);
  }
  check() {
    console.log("1")
    setTimeout(function () { console.log("2"); }, 1000);
    setTimeout(function () { console.log("3"); }, 0);
    console.log("4")
  }
  getCall() {
    function foo() {
      debugger;
      let x = 10;
      console.log('foo');

      function bar() {
        console.log(x, 'bar');
      }
    }
    // this.userService.getProducts().subscribe(productsData =>{
    //   this.products = productsData;
    // }
    // );

  }

}
