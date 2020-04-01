import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeProductComponent } from './home-product/home-product.component';


const routes: Routes = [
  {path:'', component: HomeComponent, 
 children:[
   {path: 'products', component: HomeProductComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { 
  
}
