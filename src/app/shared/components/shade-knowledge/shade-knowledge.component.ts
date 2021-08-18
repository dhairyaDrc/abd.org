import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shade-knowledge',
  templateUrl: './shade-knowledge.component.html',
  styleUrls: ['./shade-knowledge.component.css']
})
export class ShadeKnowledgeComponent implements OnInit {

  constructor() { }
@Input() para1;
@Input() para2;
@Input() para3;
@Input() para4;
@Input() para5;
@Input() para6;
@Input() para7;
@Input() para8;
@Input() para9;
@Input() para10;
@Input() para11;
@Input() para12;
@Input() para13;
@Input() quote;
@Input() title;
@Input() image;
  ngOnInit(): void {
  }

}
