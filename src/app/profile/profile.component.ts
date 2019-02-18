import { Component, OnInit } from '@angular/core';
import { Profile } from '../domain/Profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: Profile;
  public firstName: string;
  constructor() {}

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.firstName = this.profile.name.substring(0, 1);
  }
}
