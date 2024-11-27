import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';

export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'repository', component: RepositoryComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' }, // מסלול ברירת מחדל
    { path: '**', redirectTo: '/user' }, // מסלול לטיפול בטעויות
  ];