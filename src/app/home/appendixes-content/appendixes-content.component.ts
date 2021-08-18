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

  // app_photo1 = "./assets/images/app/app_photo1.jpg"

  // appendix1 = "./assets/images/app/appendix1.png";

  // appendix2_1 = "./assets/images/app/appendix2_1.png";
  // appendix2_2 = "./assets/images/app/appendix2_2.png";
  // appendix2_3 = "./assets/images/app/appendix2_3.png";
  // appendix2_4 = "./assets/images/app/appendix2_4.png";
  // appendix2_5 = "./assets/images/app/appendix2_5.png";

  // appendix3 = "./assets/images/app/appendix3.png";

  // appendix4 = "./assets/images/app/appendix4.png";

  // appendix5 = "./assets/images/app/appendix5.png";

  // appendix6 = "./assets/images/app/appendix6.png";

  // appendix7A = "./assets/images/app/appendix7A.png";
  // appendix7B1 = "./assets/images/app/appendix7B1.png";
  // appendix7B2 = "./assets/images/app/appendix7B2.png";

  // appendix8A = "./assets/images/app/appendix8A.png";
  // appendix8B = "./assets/images/app/appendix8B.png";

  overlayShown = false;
  scrollPosition = 0;
  mainElement = document.getElementById('appendixes');
  targetElement = document.getElementById('appendix1');
  isShowImage = false;
  sourceImages = [];

  data = [];
  list = [];
  id = [];
  images = [];

  constructor() { }

  ngOnInit(): void {
    this.data = appendixesContentJsonData;
    this.list = appendixesListJsonData;

    this.list.map(el => {
      this.id = el.id;
      console.log("\n id : ",this.id);
      
    })

    console.log("appendixesListJsonData : ",this.data);


    
  }

  showImage(img: any) {
    console.log('image', img)
    this.sourceImages = img;
    this.isShowImage ? this.isShowImage = false : this.isShowImage = true;;
  }


}
