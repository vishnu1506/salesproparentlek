import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.success)
            this.successToast(event.body.success.message, event.body.success.title, 3000);
        }
      }),
      catchError((error: any) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `${error.error.message}`;
        }
        else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        this.errorToast(errorMsg, 'Error');
        console.log(errorMsg);
        return of(error);
      }));

  }

  successToast(title: string, message: string, timeOut = 5000) {
    this.toastr.success(message, title, { timeOut: timeOut, closeButton: true });
  }

  errorToast(title: string, message: string, timeOut = 5000) {
    this.toastr.error(message, title, { timeOut: timeOut, closeButton: true });
  }

  warningToast(title: string, message: string, timeOut = 5000) {
    this.toastr.warning(message, title, { timeOut: timeOut, closeButton: true });
  }

  infoToast(title: string, message: string, timeOut = 5000) {
    this.toastr.info(message, title, { timeOut: timeOut, closeButton: true });
  }

}
