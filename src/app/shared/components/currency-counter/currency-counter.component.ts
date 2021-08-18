import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-currency-counter',
  templateUrl: './currency-counter.component.html',
  styleUrls: ['./currency-counter.component.css']
})
export class CurrencyCounterComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Input() tag1;
  @Input() tag2;
  @Input() tag3;
  @Input() tag4;
  @Input() tag5;
  @Input() digit1;
  @Input() digit2;
  @Input() digit3;
  @Input() digit4;
  @Input() digit5;
  @Input() sign;
  @Input() symbol;
  @Input() id;
  ngOnInit(): void {

    this.numberCounter1();
    this.numberCounter2();
    this.numberCounter3();
    this.numberCounter4();
    this.numberCounter5();
    // console.log("currency Counter>>>>>>>>>>>",this.tag);

  }

  numberCounter1() {
    setTimeout(() => {
      let id = '#dynamic-number1';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter2() {
    setTimeout(() => {
      let id = '#dynamic-number2';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter3() {
    setTimeout(() => {
      let id = '#dynamic-number3';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter4() {
    setTimeout(() => {
      let id = '#dynamic-number4';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

  numberCounter5() {
    setTimeout(() => {
      let id = '#dynamic-number5';
      var currentNumber = $(id).text();

      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);

  }

}
