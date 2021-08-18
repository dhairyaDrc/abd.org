
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import counterCardsJsonData from "src/app/constants/counterCards.json";
import * as $ from 'jquery';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.css']
})
export class CounterCardComponent implements OnInit {

  @Input() data;
  @Input() currency;
  @Input() money;
  @Input() letter;
  @Input() duration;
  @Input() digit;
  @Input() id;
  @Input() steps: number;

  @ViewChild("animatedDigit") animatedDigit: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("this.data.counter-card : ", counterCardsJsonData);
    console.log("currency : ", this.currency);
    console.log("money : ", this.money);
    console.log("letter : ", this.letter);
    this.numberCounter();
  }

  numberCounter() {
    setTimeout(() => {
      let id = '#dynamic-number' + this.id;
      var currentNumber = $(id).text();
  
      let number = Number(currentNumber)
      $({ numberValue: 0 }).animate({ numberValue: number  }, {
        duration: 2000,
        easing: 'linear',
        step: function (now) {
          $(id).text(now.toFixed(1));
        }
      });
    }, 100);
      
    }
}
