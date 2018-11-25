import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  isNullNameOrTitle;
  isSuccess;

  constructor(private router: Router) {
    this.isNullNameOrTitle = false;
    this.isSuccess = false;
  }

  ngOnInit() {
  }

  add(name, title) {
    if (name !== '' && title !== '') {
      AppComponent.arr = AppComponent.arr.concat({name, title});
      this.isSuccess = true;
      this.router.navigate(['/', 'success']);
    } else {
      this.isNullNameOrTitle = true;
    }
  }
}
