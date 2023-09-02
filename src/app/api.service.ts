import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  crawl(url: string, depth: number) {
    return this.http.post(`${this.baseUrl}/crawl`, { url, depth });
  }

  getUrls(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-urls`);
  }

  getRelatedUrls(initialUrl: string): Observable<any> {
    const params = new HttpParams().set('initial_url', initialUrl);
    return this.http.get(`${this.baseUrl}/get-related-urls`, { params });
  }

}
