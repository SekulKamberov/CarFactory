import { 
    HttpResponse,
    HttpRequest,  
    HttpHandler, 
    HttpEvent, 
    HttpInterceptor 
} from '@angular/common/http'
 
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'

import { tap } from 'rxjs/operators'
import jwt_decode from 'jwt-decode'

import { AuthService } from '../authentication/auth.service'
import { ToastrService } from '../../../node_modules/ngx-toastr'

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    constructor (
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router) {             
        }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith('/auth/login') || req.url.endsWith('/auth/signup')) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            })
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }

        return next
            .handle(req)
            .pipe(tap((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse && req.url.endsWith('/auth/login')) {
                    this.saveToken(res.body)
                }

                if (res instanceof HttpResponse && res.body.success && req.url.endsWith('/auth/signup')) {
                    this.toastr.success(res.body.message)
                    this.router.navigate(['/signin'])
                }

                if (res instanceof HttpResponse && res.body.success && req.url.endsWith('/car/create')) {
                    this.toastr.success(res.body.message)
                    this.router.navigate(['car/all'])
                }
            }))
    }

    private saveToken (data) {
        if (this.decodeToken(data.token)) {
            const authtoken = data.token
            this.authService.authtoken = authtoken
            localStorage.setItem('authtoken', authtoken)
            this.toastr.success(data.message)
            this.router.navigate(['car/all'])
        } else {
            this.toastr.error('Invalid token', 'Warning')
        }
    }

    private decodeToken (token) {
        try {
              jwt_decode(token)
              return true
        } catch {
              return false
        }
    }
}
