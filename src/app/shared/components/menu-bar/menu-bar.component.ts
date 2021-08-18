import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  isShowMenu = false;
  isSocialMenu = false;

  ngOnInit(): void { }

  
  showMenu() {
    this.isShowMenu ? this.isShowMenu = false : this.isShowMenu = true;
  }
  
  openSocialMenu(){
    this.isSocialMenu ? this.isSocialMenu = false : this.isSocialMenu = true;
  }
  
}
