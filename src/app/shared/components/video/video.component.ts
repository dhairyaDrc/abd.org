import { Component, Input, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }
@Input() data
  ngOnInit(): void {
    // console.log("videoooooooooooooooooooooooooooooo", this.data);
  }

  
  

}
