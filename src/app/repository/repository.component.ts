import { Component, OnInit } from '@angular/core';
import {RepositoryService} from '../services/repository.service'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Repository } from '../models/repository.model';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [CommonModule,RouterModule ],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss'
})
export class RepositoryComponent implements OnInit {
  repository: Repository | null = null; // משתנה לאחסון נתוני המשתמש
  repositoryId: number = 13; // ניתן לשנות את ה-ID בהתאם לצורך
  allRepositories: Repository[] = [];

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit(): void {
    this.getAllRepositories();
    this.getRepository(this.repositoryId);
  }
  getAllRepositories(): void {
    this.repositoryService.getAll().subscribe({
      next: (allRepositoryData:Repository[]) => {
        this.allRepositories = allRepositoryData;
      },
      error: (err) => {
        console.error('Failed to fetch repository:', err);
      },
    });
  }
  getRepository(id: number): void {
    this.repositoryService.get(id).subscribe({
      next: (repositoryData) => {
        this.repository = repositoryData;
      },
      error: (err) => {
        console.error('Failed to fetch repository:', err);
      },
    });
  }
}
