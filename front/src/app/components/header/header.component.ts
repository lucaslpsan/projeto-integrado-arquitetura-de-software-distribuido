import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  title = environment.title;
  showFiller = false;
}
