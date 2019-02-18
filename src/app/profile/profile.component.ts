import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  ngOnInit() {
    this.setBackGround();
  }
  constructor() {}
  colors = [
    '#EF5350',
    '#EC407A',
    '#AB47BC',
    '#7E57C2',
    '#5C6BC0',
    '#42A5F5',
    '#29B6F6',
    '#26C6DA',
    '#26A69A',
    '#FFEE58',
  ];
  backgroundColor: {};
  setBackGround() {
    var index = Math.random() * 10;
    var i = index.toString().substring(0, 1);
    this.backgroundColor = {
      background: this.colors[i],
    };
  }
}
