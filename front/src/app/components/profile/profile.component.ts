import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  perfil?: User;

  constructor(
    private profileService: ProfileService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.retrieveProfile();
  }

  refreshList(): void {
    this.retrieveProfile();
  }

  retrieveProfile(): void {
    this.profileService
      .getById(this.authService.user.uid)
      .subscribe((profile: any) => (this.perfil = profile));

    console.log(this.perfil);
  }
}
