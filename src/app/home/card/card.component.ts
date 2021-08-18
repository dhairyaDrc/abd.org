import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data;
  @Input() image;
  @Input() content;
  @Input() id;
  
  constructor() { }

  ngOnInit(): void {
    console.log("this.data : ",this.data)
    console.log(" this.image : ", this.image);
    
  }

}
