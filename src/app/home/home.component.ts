import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { 

    this.userService.getProducts();

    var info = {"city": "Fairfax"};

    info.city = undefined;

    console.log(info);
  }

  goToProducts() {

    this.router.navigate(['home/products']);


  }

 

}
