import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { RouterModule }             from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { rootReducer, INITIAL_STATE } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      HttpModule,
      FormsModule,
      NgReduxModule,
      RouterModule,
      StoreModule.forRoot({rootReducer}),
      !environment.production ? StoreDevtoolsModule.instrument() : []
    
  ]
})
export class SharedModule { 
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
