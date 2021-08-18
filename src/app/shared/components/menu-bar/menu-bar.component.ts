import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
// import chapter2CardJsonData from "../constants/chapter2-cards.json"
import chapter3CardJsonData from "src/app/constants/chapter3.json"
import chapter4CardJsonData from "src/app/constants/chapter4.json";
import  centralWestAsia  from "src/app/constants/central-west-asia.json";
import  eastAsia  from "src/app/constants/east-asia.json";
import  pacific  from "src/app/constants/pacific.json";
import  southasia  from "src/app/constants/south-asia.json";
import  southeastasia  from "src/app/constants/south-east-asia.json";


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  data = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  isShowMenu = false;
  isSocialMenu = false;

  ngOnInit(): void { }

  
  showMenu() {
    this.isShowMenu ? this.isShowMenu = false : this.isShowMenu = true;
  }
  
  openSocialMenu(){
    this.isSocialMenu ? this.isSocialMenu = false : this.isSocialMenu = true;
  }

  goToPresidentsMessage(){
    this.router.navigate(['/presidents-message']);
  }

  goToBoardOfDirectors(){
    this.router.navigate(['/board-of-directors']);
  }

  goToFinancialHighlights(){
    this.router.navigate(['/financial-highlights']);
  }

  goToReport(id: number){
    // this.router.navigate(['/report']);
    

      
      if (id == 1) {
        // this.data=chapter1JsonData;
        this.router.navigate(['/report'], { queryParams: { id: 1 } });
        console.log("this.data",this.data);
        
      }else if (id == 4) {
        this.data=chapter4CardJsonData;
      }else if (id == 3) {
        this.data=chapter3CardJsonData;
      }else if (id == 2){
        this.router.navigate(['/chapter2']);
        } else if (id==10){
          this.data=centralWestAsia;
        }else if (id==11){
          this.data=eastAsia;
        }else if (id==12){
          this.data=pacific;
        }else if (id==13){
          this.data=southasia;
        }else if (id==14){
          this.data=southeastasia;
        }

        this.showMenu();
  }

  goToAppendixes(){
    this.router.navigate(['/appendixes-content']);
  }
  
}
