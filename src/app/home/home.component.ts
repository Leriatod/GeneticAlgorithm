import { Component, OnInit } from '@angular/core';
import { GeneticLandscapeSearch } from '../models/genetic-landscape-search';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public geneticSearch: GeneticLandscapeSearch) { 
    console.log(geneticSearch);
    geneticSearch.doWork();
  }

  ngOnInit(): void {
  }

}
