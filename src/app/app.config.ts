import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { authInterceptor } from './interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
  ]
};
