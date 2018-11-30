import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardComponent} from '../card/card.component';

export interface User {
  name: string;
  title: string;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  isNullNameOrTitle;
  isSuccess;
  newJs;

  constructor(private http: HttpClient) {
    this.isNullNameOrTitle = false;
    this.isSuccess = false;
    this.newJs = {};
  }

  ngOnInit() {
  }

  add(name, title): void {
    const a = {name: name, title: title};
    CardComponent.asp = CardComponent.asp.concat(a);
  }
}
