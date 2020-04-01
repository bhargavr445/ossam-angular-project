import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { rootReducer, INITIAL_STATE } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      HttpModule,
    HttpClientModule,
      FormsModule,
      NgReduxModule,
      RouterModule,
      StoreModule.forRoot({rootReducer}),
      !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
]
})
export class SharedModule {
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}





