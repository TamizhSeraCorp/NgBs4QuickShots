import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mach';

users = [
  1, 2, 3, 4, 5
];

showErrors = false;

}
