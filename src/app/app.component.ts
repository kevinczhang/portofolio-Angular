import { Component } from '@angular/core';
import { NgbCheckBox } from '@ng-bootstrap/ng-bootstrap/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model = {
    left: true,
    middle: false,
    right: false
  }
}
