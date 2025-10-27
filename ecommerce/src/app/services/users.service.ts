import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Users } from '../models/users.model';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';
  // or use: private apiUrl = environment.apiUrl + '/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl).pipe(retry(2));
  }
}
