// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User | null = null; // משתנה לאחסון נתוני המשתמש
  userId: number = 13; // ניתן לשנות את ה-ID בהתאם לצורך
  allUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getUser(this.userId);
  }
  getAllUsers(): void {
    this.userService.getAll().subscribe({
      next: (allUserData:User[]) => {
        this.allUsers = allUserData;
      },
      error: (err) => {
        console.error('Failed to fetch user:', err);
      },
    });
  }
  getUser(id: number): void {
    this.userService.get(id).subscribe({
      next: (userData) => {
        this.user = userData;
      },
      error: (err) => {
        console.error('Failed to fetch user:', err);
      },
    });
  }
}
