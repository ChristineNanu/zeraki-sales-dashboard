import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCollectionsCount(): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/collections`).pipe(
      map(collections => collections.length)
    );
  }

  getSchools(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/schools`);
  }

  getInvoices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/invoices`);
  }

  getBouncedChequesCount(): Observable<number> {
    return this.http.get<any[]>(`${this.apiUrl}/collections`).pipe(
      map(collections => collections.filter(collection => collection.status === 'Bounced').length)
    );
  }
}
