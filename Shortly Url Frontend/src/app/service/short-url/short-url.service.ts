import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  private baseUrl: string = "https://shortlyurl-6uvv.onrender.com/v1/user/url";

  constructor(private http: HttpClient) { }

  // FIXED: Correct endpoint and parameter names
  shortenUrl(longUrl: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/getshort`, { longUrl })
      .pipe(catchError(this.handleError));
  }

  // FIXED: Use correct DTO structure
  getLongUrl(shortCode: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/getlong`, { shortCode })
      .pipe(catchError(this.handleError));
  }

  getAllUrls(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`)
      .pipe(catchError(this.handleError));
  }

  // FIXED: Use correct DTO structure
  deleteUrl(shortUrl: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete`, { shortUrl })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('API error occurred:', error);
    let errorMsg = error.error?.message || error.message || 'Unknown error';
    return throwError(() => new Error(errorMsg));
  }
}