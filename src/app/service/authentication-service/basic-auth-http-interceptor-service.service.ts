import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorServiceService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {

      const tokenStr = sessionStorage.getItem('token');
      req = req.clone({
        setHeaders: {
          Authorization: tokenStr
        }
      });
    }
    return next.handle(req);
  }
}
