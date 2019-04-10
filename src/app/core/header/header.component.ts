import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authInfo } from 'src/app/utils/auth.util';
import { Profile } from 'src/app/domain/Profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * 是否登录
   */
  public isLogin = false;
  /**
   * 用户名
   */
  public username: string;

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = authInfo();
    // console.log('auth is ', auth);
    if (auth.userId != -1) {
      this.isLogin = true;
      const profile: Profile = JSON.parse(localStorage.getItem('profile'));
      this.username = profile.name;
    } else {
      this.isLogin = false;
    }
  }

  /**
   * 跳转到考试页面
   */
  routerToExam() {
    this.router.navigateByUrl('/');
  }

  /**
   * 跳转到分数详情
   */
  routerToScore() {
    this.router.navigateByUrl('/score');
  }

  /**
   * 跳转到用户详情
   */
  routerToUser() {
    this.router.navigateByUrl('/profile');
  }

  /**
   * 注销账号
   */
  routerToLogout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
