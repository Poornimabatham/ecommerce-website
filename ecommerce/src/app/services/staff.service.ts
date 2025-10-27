import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Staff } from '../models/staff.model';
import { environment } from '../../environment/environment';
@Injectable({ providedIn: 'root' })
export class StaffService {
  private apiUrl = `${environment.apiUrl}/staff`; // replace with your API
  private apiUrl1 = `${environment.apiUrl}/roles`; // replace with your API

  constructor(private http: HttpClient) {}

  getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }
  addStaff(staff: Staff): Observable<Staff> {
    console;
    return this.http.post<Staff>(this.apiUrl, staff);
  }
  getRole(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl1);
  }
  getStaffById(id: string): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/${id}`);
  }
  updateStaff(id: string, staffData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, staffData);
  }
  deleteStaff(id: string) {
    return this.http.delete(`http://localhost:5000/staff/delete/${id}`);
  }
  
}
