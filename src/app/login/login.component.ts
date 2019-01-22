import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../domain/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  // public user:User
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  onSubmit() {
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    this.loginService.doLogin(user).subscribe(
      result => {
        console.log('login info is ', result.data.token);
        // token 校验

        // 存储token
        localStorage.setItem('token', 'Bearer ' + result.data.token);
        this.router.navigateByUrl('/exam');
      },
      error => {
        console.log(error);
      },
    );
  }
}
