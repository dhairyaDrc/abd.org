import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(
    private router: Router
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

  goToReport(){
    this.router.navigate(['/report']);
  }

  goToAppendixes(){
    this.router.navigate(['/appendixes-content']);
  }
  
}
