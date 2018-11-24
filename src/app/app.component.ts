import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr = [];

  add(a) {
    if (a !== '') {
      this.arr = this.arr.concat(a);
    } else {
      alert('Empty field!');
    }
  }

  delete(a) {
    this.arr.splice(a, 1);
  }

  fet() {
    alert('S');
  }
}
