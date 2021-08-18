import { Component, Input, OnInit } from '@angular/core';
import regionCounterData from "src/app/constants/region-counter.json"

@Component({
  selector: 'app-region-counter',
  templateUrl: './region-counter.component.html',
  styleUrls: ['./region-counter.component.css']
})
export class RegionCounterComponent implements OnInit {

  regionCounterData = [];

  @Input() heading;
  @Input() letter;
  @Input() symbol;
  @Input() digit;
  @Input() tag;
  
  constructor() { }

  ngOnInit(): void {
    this.regionCounterData = regionCounterData;
  }

}
