import { 
    HttpRequest, 
    HttpHandler, 
    HttpEvent, 
    HttpInterceptor, 
    HttpErrorResponse 
} from '@angular/common/http'

import { Injectable} from '@angular/core'
import { Observable, throwError} from 'rxjs'

import { Router} from '@angular/router'
import { catchError} from 'rxjs/operators'
import { ToastrService} from '../../../node_modules/ngx-toastr'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor (
        private toastr: ToastrService,
        private router: Router 
    ) {  }

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            return next
              .handle(req)
              .pipe(catchError((err: HttpErrorResponse) => {
                  switch (err.status) {
                    case 400:
                        const message = Object.keys(err.error.errors)
                            .map(e => err.error.errors[e])
                            .join('\n')
                        this.toastr.error(message, 'Warning')
                        break

                    case 401:
                        this.toastr.error(err.error.message, 'Warning')
                        break
                    }

                  return throwError(err)
              }))
        }

}