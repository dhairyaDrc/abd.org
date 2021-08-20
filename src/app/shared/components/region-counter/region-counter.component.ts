import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-region-counter',
  templateUrl: './region-counter.component.html',
  styleUrls: ['./region-counter.component.css']
})
export class RegionCounterComponent implements OnInit {

  @Input() title;
  @Input() id;

  @Input() tag1;
  @Input() tag2;
  @Input() tag3;
  @Input() tag4;

  @Input() digit1;
  @Input() digit2;
  @Input() digit3;
  @Input() digit4;

  @Input() symbol;
  @Input() sign;

  constructor() { }

  ngOnInit(): void {
    this.numberCounter1();
    this.numberCounter2();
    this.numberCounter3();
    this.numberCounter4();

    // console.log("digit1 : ",this.digit1);
    
  }

  numberCounter1() {
    setTimeout(() => {
      let id = '#counter1';
      var currentNumber = $(id).text();
      // console.log("currentNumber : ",currentNumber);
      

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
      let id = '#counter2';
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
      let id = '#counter3';
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
      let id = '#counter4';
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
