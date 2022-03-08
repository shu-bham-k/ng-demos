import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private router:Router){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //TODO: add token in request header
        var token = localStorage.getItem('Token');
        let headers: HttpHeaders = req.headers;
        //token = "abc";
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5AbWFpbC5jb20iLCJVc2VySW5mbyI6ImxrSEZTcFZUc044RmdXVW4wV0VucCtrYjBBWi9sRnlyM0tjSDhXN3FVNHE4NE1teDZRendWRmpmUnhMZ3Ixb0U1b1BPcGdsSkZETlBFSlpSNlRaYm1RPT0iLCJqdGkiOiIwNmE2ZTdmYi0zMTM5LTQ1OWYtYWRhYi0yMmQ5OGQwN2MzMmMiLCJleHAiOjE2NDYwMjU0ODJ9.Ta9FUh2NQpcSWFWu_jIzn12mEcvjWRX6aGYJioHZYJA";
        var modifiedRequest = token ? req.clone(
            {
                setHeaders: { Authorization: `bearer ${token}` },

            }
        ) : req.clone();

        // console.log("service intercepted");
        return next.handle(modifiedRequest)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    // console.log(error);
                    this.handleError(error);
                    return throwError(error);
                })
            );
    }
    handleError(error: HttpErrorResponse): any {
        let commonErrorMessage = "Unknown error occured";
        if (error.error instanceof ErrorEvent) {
            commonErrorMessage = error.error.message;
        } else {
            if (error.status == 400) {
                //TODO : Show message Invalid argument
                console.log("bad request");

            } else if (error.status == 401) {
                // TODO: show message Invalid user and redirect to login screen.
                this.router.navigate(['/signIn'])
                console.log("unauthorize access");
            }

        }
    }
}