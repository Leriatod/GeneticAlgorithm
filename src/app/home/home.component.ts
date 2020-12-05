import { Component } from '@angular/core';
import { GeneticLandscapeSearch } from '../models/genetic-landscape-search';
import { Individual } from '../models/individual';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  individuals: Individual[] = [];
  bestIndividual: Individual;
  executionTime: number;

  constructor(public geneticSearch: GeneticLandscapeSearch) { }

  setResultsFromGeneticAlgorithm() {
    var startTime = performance.now();
    this.individuals = this.geneticSearch.getLastPopulation();
    var endTime = performance.now();

    console.log(this.individuals);

    this.executionTime = endTime - startTime;

    this.bestIndividual = this.individuals.filter(i => i.fitness)[0];
  }

}
