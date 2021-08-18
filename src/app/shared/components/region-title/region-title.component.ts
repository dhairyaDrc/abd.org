import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-title',
  templateUrl: './region-title.component.html',
  styleUrls: ['./region-title.component.css']
})
export class RegionTitleComponent implements OnInit {

  @Input() regionTitle;
  @Input() region;
  @Input() content;

  constructor() { }

  ngOnInit(): void {
    console.log("this.regionTitle",this.regionTitle);
    
  }

}
