import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import chapter2CardJsonData from "../../constants/chapter2-cards.json";

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['./chapter2.component.css']
})
export class Chapter2Component implements OnInit {

  chapter2Data = [];

  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.chapter2Data = chapter2CardJsonData;
    console.log("chapter2CardJsonData : ",chapter2CardJsonData);
    
  }

  goToRegions(id: number){
    this.router.navigate(['/report'], { queryParams: { id: id } });
  }

  //   this.route.queryParams
  //     .subscribe(params => {
  //       console.log(params.id);

  //       if (id == 1) {
  //         this.router.navigate(['/central-west-asia'], { queryParams: { id: id } });
  //       } else if (id == 2) {
  //         this.router.navigate(['/east-asia'], { queryParams: { id: id } });
  //       } else if(id == 3){
  //         this.router.navigate(['/pacific'], { queryParams: { id: id } });
  //       }else if(id == 4){
  //         this.router.navigate(['/south-asia'], { queryParams: { id: id } });
  //       }else {
  //         this.router.navigate(['/south-east-asia'], { queryParams: { id: id } });
  //       }
  //     }
  //   ); 
  // }

}
