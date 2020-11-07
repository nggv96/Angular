import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { IUserSignup } from 'src/app/shared/models/userSignup.model';
import { catchError, retry } from 'rxjs/operators';
import { IUserLoguin } from 'src/app/shared/models/userLoguin.model';
import { IUserLoginResponse } from 'src/app/shared/models/userLoguinResponse.model';
import { IUserRegisterResponse } from 'src/app/shared/models/userSignupResponse.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlUsers: string = environment.users

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`)
  }

  public singUp (dataSignup:IUserSignup): Observable<IUserRegisterResponse> {
    const url = `${this.urlUsers}/users/signup`;
    return this.httpClient.post<IUserRegisterResponse>(url,dataSignup).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public loguin (dataLoguin: IUserLoguin): Observable<IUserLoginResponse> {
    const url = `${this.urlUsers}/users/login`;
    return this.httpClient.post<IUserLoginResponse>(url,dataLoguin).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
