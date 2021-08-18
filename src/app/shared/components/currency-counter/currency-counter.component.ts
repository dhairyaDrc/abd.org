import { Component, Input, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    // console.log("currency Counter>>>>>>>>>>>",this.tag);
    
  }

}
