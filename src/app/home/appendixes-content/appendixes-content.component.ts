import { Component, OnInit } from '@angular/core';

import appendixesContentJsonData from 'src/app/constants/appendixes-content.json'
import appendixesListJsonData from 'src/app/constants/appendixes-list.json'
import appendixesImagesJsonData from 'src/app/constants/appendixes-images.json'

@Component({
  selector: 'app-appendixes-content',
  templateUrl: './appendixes-content.component.html',
  styleUrls: ['./appendixes-content.component.css']
})
export class AppendixesContentComponent implements OnInit {
  
  scrollPosition = 0;
  isShowImage = false;
  sourceImages = [];

  data = [];
  list = [];
  id = [];

  constructor() { }

  ngOnInit(): void {
    this.data = appendixesContentJsonData;
    this.list = appendixesListJsonData;

    this.list.map(el => {
      this.id = el.id;
      // console.log("\n id : ",this.id);

    })

    // console.log("appendixesListJsonData : ",this.data);



  }

  showImage(img: any) {
    console.log('image', img)
    this.sourceImages = img;
    this.isShowImage ? this.isShowImage = false : this.isShowImage = true;;
  }


}
