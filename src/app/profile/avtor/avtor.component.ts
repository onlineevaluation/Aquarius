import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avtor',
  templateUrl: './avtor.component.html',
  styleUrls: ['./avtor.component.scss'],
})
export class AvtorComponent implements OnInit {
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
