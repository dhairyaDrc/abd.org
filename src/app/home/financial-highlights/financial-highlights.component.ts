import { Component, OnInit } from '@angular/core';
import financialHighlightsJsonData from "src/app/constants/financial-highlights.json";
import counterCardsJsonData from "src/app/constants/counterCards.json";

@Component({
  selector: 'app-financial-highlights',
  templateUrl: './financial-highlights.component.html',
  styleUrls: ['./financial-highlights.component.css']
})
export class FinancialHighlightsComponent implements OnInit {

  homeData: any;
  value = [];
  title: string;
  subTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.homeData = counterCardsJsonData;
    this.value = financialHighlightsJsonData; 

    console.log("this.homeData >>> ",counterCardsJsonData,"\nfinancialHighlights >>> ",financialHighlightsJsonData,"\nvalue >>> ",this.value)

    this.getTitle();
    this.getSubTitle();
  }

  getTitle(){
    this.value.map(el => {
      if(el.type === 'title'){
        this.title = el.title ;
        console.log("this.title >>>>> ",this.title);
      }     
    });
  }

  getSubTitle(){
    this.value.map(el => {
      if(el.type === 'title'){
        this.subTitle = el.subTitle ;
        console.log("this.title >>>>> ",this.subTitle);
      }     
    });
  }
}

