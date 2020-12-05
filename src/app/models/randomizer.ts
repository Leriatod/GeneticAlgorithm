import { Injectable } from '@angular/core';

@Injectable()
export class Randomizer {

    getRandomInteger(min: number, max: number) { 
        // min and max included
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    getRandom() { return Math.random(); }
}