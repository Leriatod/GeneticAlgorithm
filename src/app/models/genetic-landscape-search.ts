import { Individual } from './individual';
import { Injectable } from '@angular/core';
import { Randomizer } from './randomizer';

@Injectable()
export class GeneticLandscapeSearch {
    populationNumber: number   = 100;
    populationSize:   number   = 1000;
    mutationRate:     number   = 0.2;
                              
    private readonly INTEGER32_MAX = 0x7fffffff; 
    private readonly SHIFT         = 32;

    population: Individual[]   = [];

    constructor(private randomizer: Randomizer) {}

    doWork() {
        this.generateStartPopulation();
        this.naturalSelection();
        console.log(this.population);
        for (let i = 0; i < this.populationNumber; i++) {
            this.generateNewPopulation();
            this.naturalSelection();
            if (Math.abs(this.population[1].fitness - this.population[0].fitness) < 0.0001) break;
        }
        console.log(this.population);
    }

    generateNewPopulation() {
        var newPopulation = [];
        for (let i = 0; i < this.population.length; i++) {
            var individual1 = this.pickRandomIndividual();
            var individual2 = this.pickRandomIndividual();
            
            var mask = ~0 << this.randomizer.getRandomInteger(0, this.SHIFT);

            var childGenom = individual1.genom & mask | individual2.genom & ~mask;
            
            if (this.randomizer.getRandom() < this.mutationRate) {
                childGenom ^= 1 << this.randomizer.getRandomInteger(0, this.SHIFT);
            }
            var child = new Individual(childGenom);
            newPopulation.push(child);
        }
        this.population = newPopulation;
    }

    naturalSelection() {
        var survivors = [];
        for (let i = 0; i < this.population.length; i++) {
            var individual1 = this.pickRandomIndividual();
            var individual2 = this.pickRandomIndividual();

            var survivor = individual1.fitness < individual2.fitness ? individual1 : individual2;
            survivors.push(survivor);
        }
        this.population = survivors;
    }

    private pickRandomIndividual(): Individual {
        var index = this.randomizer.getRandomInteger(0, this.population.length - 1);
        var individual = this.population[index];
        return individual;
    }

    generateStartPopulation() {
        this.population = [];
        for (let i = 0; i < this.populationSize; i++) {
            var genom = this.randomizer.getRandomInteger(0, this.INTEGER32_MAX);
            var individual = new Individual(genom);
            this.population.push(individual); 
        }
    }

}


