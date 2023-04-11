import { Injectable } from '@angular/core';
import { Beer } from './interface';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  public favorite: Beer[] = [];

  constructor() { }
}
