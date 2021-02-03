import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SignUpModel } from './models/signup.model'
import { SignInModel } from './models/signin.model'
import jwt_decode from 'jwt-decode'
 
import { ToastrService } from '../../../node_modules/ngx-toastr'
import { Router } from '@angular/router'

const loginUrl = 'http://localhost:5000/auth/login'
const registerUrl = 'http://localhost:5000/auth/signup'

@Injectable()
export class AuthService {
    private currentAuthtoken

    constructor (private http: HttpClient,
        private toastr: ToastrService,
        private router: Router) {
            if (localStorage.getItem('authtoken')) {
                 
                const authtoken = String(localStorage.getItem('authtoken'));
                try {
                    const decoded = jwt_decode(authtoken)
                    if (!this.isTokenExpired(decoded)) {
                        this.currentAuthtoken = authtoken
                    }
                } catch (err) {
                    this.toastr.error('Invalid token', 'Warning')
                }
            }
        }
      
        register(body: SignUpModel) {
            return this.http.post(registerUrl, body)
        }
        
        login(body: SignInModel) {
            return this.http.post(loginUrl, body)
        }

        logout() {
           localStorage.clear()
           this.toastr.success('Logout successful')
           this.router.navigate(['/signin'])
        }

        isAuthenticated () { 
            return this.currentAuthtoken === localStorage.getItem('authtoken');
        }

        isAdmin () {
            const decoded: any = jwt_decode(this.currentAuthtoken)
            if (this.isTokenExpired(decoded)) {
                this.currentAuthtoken = null
                this.toastr.error('Invalid token', 'Warning')
                return false
            }

            return decoded.isAdmin
        }

        get authtoken () {
            return this.currentAuthtoken
        }

        set authtoken (value: string) {
            this.currentAuthtoken = value
        }

        isTokenExpired(token): boolean {
            const date = this.getTokenExpirationDate(token)
            if (date === undefined) {
                return false
            }

            return !(date.valueOf() > new Date().valueOf())
        }

        private getTokenExpirationDate(token): Date {
            if (token.exp === undefined) {
                return null
            }

            const date = new Date(0)
            date.setUTCSeconds(token.exp)
            return date
        }
    }
