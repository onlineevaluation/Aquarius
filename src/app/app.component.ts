import {Component} from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square',
      [state('green', style({'background-color': 'green'})),
        state('red', style({'background-color': 'red'})),
        transition('green => red', animate(1000))])
  ]
})
export class AppComponent {

  squareState: string;
  title = 'student-end';

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
