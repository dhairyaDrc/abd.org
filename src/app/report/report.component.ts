import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
import chapter2CardJsonData from "../constants/chapter2-cards.json"
import chapter3CardJsonData from "../constants/chapter3.json"
import chapter4CardJsonData from "../constants/chapter4.json";
import  centralWestAsia  from "../constants/central-west-asia.json";
import  eastAsia  from "../constants/east-asia.json";
import  pacific  from "../constants/pacific.json";
// import  centralWestAsia  from "../constants/central-west-asia.json";
import  southeastasia  from "../constants/south-east-asia.json";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  chapter1Data:any;
  button: any;
  chapter2Data = [];
  data:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.chapter1Data=chapter1JsonData;
    this.button = buttonJsonData;
    // this.chapter2Data = chapter2CardJsonData;
    
    console.log("chapter1JsonData >>>> ",chapter1JsonData,"\nthis.buttonJsonData : ",buttonJsonData,"\nchapter2 cards >>>>> ",chapter2CardJsonData);

    this.route.queryParams
      .subscribe(params => {
        console.log(params.id);

        if (params.id == 1) {
          this.data=chapter1JsonData;
          console.log("this.data",this.data);
          
        }else if (params.id == 4) {
          this.data=chapter4CardJsonData;
        }else if (params.id == 3) {
          this.data=chapter3CardJsonData;
        }else if (params.id == 2){
          this.router.navigate(['/chapter2']);
        } else if (params.id==10){
          this.data=centralWestAsia;
        }else if (params.id==11){
          this.data=eastAsia;
        }else if (params.id==12){
          this.data=pacific;
        }else if (params.id==13){
          this.data=centralWestAsia;
        }else if (params.id==14){
          this.data=southeastasia;
        }

      }
    );
  }

  goToNextChapter(){
    this.route.queryParams
      .subscribe(params => {
        console.log(params.id);

        if (params.id == 1) {
          this.data=chapter1JsonData;
        }else if (params.id == 4) {
          this.router.navigate(['/report']);
          this.data=chapter4CardJsonData;
        }else if (params.id == 3) {
          this.data=chapter3CardJsonData;
        }else if (params.id == 2){
          this.router.navigate(['/chapter2']);
        }else if (params.id == 5){
          this.router.navigate(['/appendixes-content']);
        }
      }
    );
    this.router.navigate(['/chapter2'])
  }
}
