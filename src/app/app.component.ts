import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr = [];
  isEmptyField = false;

  add(a) {
    if (a !== '') {
      this.arr = this.arr.concat(a);
      this.isEmptyField = false;
    } else {
      this.isEmptyField = true;
    }
  }

  removeElement(a) {
    this.arr.splice(a, 1);
  }
}
