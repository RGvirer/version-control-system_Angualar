import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, HttpClientModule], // ודאי ש-HttpClientModule כלול כאן
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'version-control-system';
}