import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  settings = {
    populationNumber: 500,
    populationSize: 10000,
    mutationRate: 0.2
  };

  constructor() { }

  ngOnInit(): void {
  }

}
