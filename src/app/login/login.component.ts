import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../domain/User';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token !== null) {
      
      this.router.navigateByUrl('/');
      this.snackBar.open(`你已登录，欢迎 xxx`, '关闭', { duration: 2000 });
    }
  }

  onSubmit() {
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    this.loginService.doLogin(user).subscribe(
      flag => {
        if (flag) {
          this.router.navigateByUrl('/');
        } else {
          // toast 登录失败
          this.snackBar.open('登录失败，请重新登录', '关闭', {
            duration: 2000,
          });
        }
      },
      error => {
        console.log(error);
        this.snackBar.open('登录失败，请重新登录', '关闭', {
          duration: 2000,
        });
      },
    );
  }
}
