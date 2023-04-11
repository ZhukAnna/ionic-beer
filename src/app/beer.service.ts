import { Injectable } from '@angular/core';
import { Beer } from './interface';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private favorite$: Beer[] = [];

  constructor() { }

  get favorite () {
    const storData = localStorage.getItem('favorite_beer');
    if (storData) this.favorite$ = JSON.parse(storData);
    return this.favorite$;
  }

  addToFavorite(beer: Beer) {
    if (this.favorite$.findIndex((el) => el.id === beer.id) < 0) {
      this.favorite$.push(beer);
      localStorage.setItem('favorite_beer', JSON.stringify(this.favorite$))
    }
  }
}
