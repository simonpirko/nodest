import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  static asp = [];
  tir;
  datas;
  hod;
  countAi;
  countU;
  isEmpty;
  gameSt;

  constructor(private http: HttpClient) {
    // CardComponent.asp = [];
    this.gameSt = 1;
    this.hod = 'user';
    this.countAi = 0;
    this.countU = 0;
    this.isEmpty = 0;
    this.tir = CardComponent.asp;
  }

  ngOnInit() {
    this.datas = [{index: 0, value: 0},
      {index: 1, value: 0},
      {index: 2, value: 0},
      {index: 3, value: 0},
      {index: 4, value: 0},
      {index: 5, value: 0},
      {index: 6, value: 0},
      {index: 7, value: 0},
      {index: 8, value: 0}];
    // this.http.get('http://localhost:8080/api/users').subscribe((data) => {
    //   CardComponent.asp = CardComponent.asp.concat(data);
    // });
  }

  // removeElement(id) {
  //   if (confirm('Remove element?')) {
  //     // AppComponent.arr.splice(id, 1);
  //   }
  // }

  ai() {
    if (this.hod === 'ai') {
      for (let i = 0; i < 9; i++) {
        if (this.datas.valueOf()[i].value === 0) {
          this.datas.valueOf()[i].value = 2;
          break;
        } else if (this.datas.valueOf()[i].value === 1 && this.datas.valueOf()[i + 1].value === 0) {
          this.datas.valueOf()[i + 1].value = 2;
          break;
        } else if (this.datas.valueOf()[i].value === 1 && this.datas.valueOf()[i - 1].value === 0) {
          this.datas.valueOf()[i - 1].value = 2;
        }
      }
      this.countAi++;
      this.hod = 'user';
      this.isEmpty++;
      this.winA();
    }
  }

  empty() {
    if (this.isEmpty < 9) {
      this.winU();
      this.ai();
    } else {
      alert('Draw!');
      this.gameSt = 0;
    }
  }

  winU() {
    let user = 0;
    for (let i = 0; i < 9; i++) {
      if (this.datas.valueOf()[i].value === 1) {
        for (let a = i; a < 9; a++) {
          if (this.datas.valueOf()[a].value === 1) {
            user++;
          } else {
            break;
          }
        }
        if (user === 3) {
          alert('User Win!');
          this.gameSt = 0;
        }
        break;
      }
    }
  }

  winA() {
    let user = 0;
    for (let i = 0; i < 9; i++) {
      if (this.datas.valueOf()[i].value === 2) {
        for (let a = i; a < 9; a++) {
          if (this.datas.valueOf()[a].value === 2) {
            user++;
          } else {
            break;
          }
        }
        if (user === 3) {
          alert('AI Win!');
          this.gameSt = 0;
        }
        break;
      }
    }
  }

  start() {
    this.gameSt = 1;
    this.hod = 1;
    this.countAi = 0;
    this.countU = 0;
    this.isEmpty = 0;
    this.ngOnInit();
  }

  swap(id) {
    this.datas.valueOf()[id].value = 1;
    this.hod = 'ai';
    this.countU++;
    this.isEmpty++;
    this.empty();
  }
}
