import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import presidentsMessage from 'src/app/constants/president.json'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  data = [];
  title: string;
  tagLine: string;
  imageGrid: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.data = presidentsMessage;
    this.title = presidentsMessage[16].title;
    this.tagLine = presidentsMessage[16].tagLine;
    this.imageGrid = presidentsMessage[16].imageGrid;

    console.log("tagline : ",presidentsMessage[16].tagLine);
    
  }

  goToNextChapter(){
    this.router.navigate(['/board-of-directors'])
  }

}
