import { Injectable } from '@angular/core';
import { HttpInterceptor,
         HttpRequest,
          HttpHandler,
          HttpSentEvent,
          HttpHeaderResponse,
          HttpProgressEvent,
          HttpResponse,
          HttpErrorResponse,
          HttpUserEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
    HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const token = sessionStorage.getItem('Authorization');
    console.log(token);
    const tokenData = 'Bearer' + token;
    console.log(tokenData);
    const modifiedRequest = req.clone({headers: req.headers.append('Authorization' , tokenData)});
    // return next.handle(modifiedRequest);
     return next.handle(modifiedRequest).pipe(
       
      map((event: any) => {
        debugger;
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
              // this.errorDialogService.openDialog(event);
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
          let data = {};
          data = {
              reason: error && error.error && error.error.reason ? error.error.reason : '',
              status: error.status
          };
          //this.errorDialogService.openDialog(data);
          return throwError(error);
      }));
  }

  
}
