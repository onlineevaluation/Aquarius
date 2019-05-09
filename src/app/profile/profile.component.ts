import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../domain/Profile';
import { Result } from '../domain/Result';
import { Resource } from '../domain/Resource';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile: Profile;
  public firstName: string;
  resourceList: Array<Resource> = [];
  constructor(private profileService: ProfileService) {}
  items = [];
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.firstName = this.profile.name.substring(0, 1);

    for (let index = 0; index < 2; index++) {
      this.items.push(index);
    }
    const studentId = this.profile.identity;
    console.log('student is ', studentId);
    this.profileService.getRecommendResource(studentId).subscribe(
      (result: Result) => {
        console.log(result);
        this.resourceList = result.data;
      },
      err0r => {
        console.log('error');
      },
    );
  }
  goResource(id: number) {
    console.log(id);
  }
}
