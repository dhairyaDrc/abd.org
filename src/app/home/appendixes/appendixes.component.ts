import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appendixes',
  templateUrl: './appendixes.component.html',
  styleUrls: ['./appendixes.component.css']
})
export class AppendixesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/appendixes-content']);
  }

}
