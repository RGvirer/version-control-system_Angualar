// services/repository.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private apiUrl = 'https://localhost:7180/api/repository'; // URL בסיסי ל-API

  constructor(private http: HttpClient) {}

  addNew(repository: Repository): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/add`, repository);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/delete/${id}`);
  }

  get(id: number): Observable<Repository> {
    return this.http.get<Repository>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}`);
  }

  update(repository: Repository): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/update`, repository);
  }
}
