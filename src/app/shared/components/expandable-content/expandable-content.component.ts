import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.css']
})
export class ExpandableContentComponent implements OnInit {

  constructor() { }

  
  @Input() data
  @Input() title
  @Input() image
  isExpand:boolean = false;
  ngOnInit(): void {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.image  );
    
  }
  readMore(){
    this.isExpand ? this.isExpand=false:this.isExpand=true
    
    
  }

}
