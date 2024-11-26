// services/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7180/api/user'; // URL בסיסי ל-API

  constructor(private http: HttpClient) {}

  // הוספת משתמש חדש
  addNew(user: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/add`, user);
  }

  // מחיקת משתמש לפי מזהה
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/delete/${id}`);
  }

  // קבלת משתמש לפי מזהה
  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // קבלת רשימת כל המשתמשים
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  // עדכון משתמש
  update(user: User): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/update`, user);
  }
}
