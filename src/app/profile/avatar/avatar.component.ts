import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() showName: string;

  constructor() {}

  ngOnInit() {
    this.setBackGround();
  }
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
