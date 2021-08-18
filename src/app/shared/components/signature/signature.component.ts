import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  @Input() signature;
  @Input() name;
  @Input() para1;
  @Input() para2;

  constructor() { }

  ngOnInit(): void {
  }

}
