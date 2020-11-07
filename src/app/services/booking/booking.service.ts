import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IBookingResponse } from 'src/app/shared/models/bookingResponse.model';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private urlBooking: string = environment.users

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`)
  }

  public booking(booking: IBooking): Observable<IBookingResponse> {
    const url = `${this.urlBooking}/booking`;
    return this.httpClient.post<IBookingResponse>(url, booking).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
