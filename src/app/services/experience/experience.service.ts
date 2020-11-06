import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IDetailResponse } from 'src/app/shared/models/detailResponse.model';
import { IExperienceResponse } from 'src/app/shared/models/experiencesResponse.model';
import { ITop5Response } from 'src/app/shared/models/top5Response.model';
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlAPI: string = environment.urlBase;

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`)
  }

  public getExperiences (): Observable<IExperienceResponse> {
    const url = `${this.urlAPI}/experiences`;
    return this.httpClient.get<IExperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById (id: number): Observable<IDetailResponse> {
    const url = `${this.urlAPI}/experiences/detail/${id}`;
    return this.httpClient.get<IDetailResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getTop5 (): Observable<ITop5Response>{
    const url = `${this.urlAPI}/experiences/top5`;
    return this.httpClient.get<ITop5Response>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

}
