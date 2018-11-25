import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  asp;
  success;

  constructor(private router: ActivatedRoute) {
    this.success = false;
    this.asp = AppComponent.arr;
  }

  ngOnInit() {
    this.success = this.router.snapshot.paramMap.get('success');
    setTimeout(function() {
      this.success = false;
    }.bind(this), 2000);
  }

  removeElement(id) {
    AppComponent.arr.splice(id, 1);
  }
}
