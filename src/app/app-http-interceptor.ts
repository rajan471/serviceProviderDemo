import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler } from '@angular/common/http'
import { environment as config } from '../environments/environment'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const headers = req.headers.set('Content-Type', 'application/json');
        const reqObj = req.clone({
            url: `${config.baseURL}${req.url}`,
            headers
        })

        // send cloned request with header to the next handler.
        return next.handle(reqObj).pipe(catchError(this.handleError.bind(this)))
    }
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            // console.error('An error occurred:', error.error.message)
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`)
        }
        if (error.status === 401) {
            // alert('Token expired or invalid')
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.')
    }
}