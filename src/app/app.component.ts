import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square', [
      state('green', style({ 'background-color': 'green' })),
      state('red', style({ 'background-color': 'red' })),
      transition('green => red', animate(1000)),
    ]),
  ],
})
export class AppComponent implements OnInit {
  squareState: string;
  title = '学生端';

  ngOnInit() {
    console.log(
      '%c╔═╗╔═╗ ╦ ╦╔═╗╦═╗╦╦ ╦╔═╗' +
        '\n\r╠═╣║═╬╗║ ║╠═╣╠╦╝║║ ║╚═╗' +
        '\n\r╩ ╩╚═╝╚╚═╝╩ ╩╩╚═╩╚═╝╚═╝' +
        '\n\r version 1.0.0 水瓶座',
      'color:blue;',
    );
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
