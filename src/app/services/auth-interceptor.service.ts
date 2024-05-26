import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';



//new Interceptor in interceptor/auth.interceptor.ts

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepter works');

    const token = localStorage.getItem('token');

    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: { Authorization: `Token ${token}` }
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigateByUrl('/login');
          }
        }
        return throwError(() => err);
      })
    );
  }

}
