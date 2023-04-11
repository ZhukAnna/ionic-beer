import {Component, Inject} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {Beer} from "../interface";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, shareReplay, tap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {BeerService} from "../beer.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, NgIf, AsyncPipe, HttpClientModule]
})
export class Tab2Page {

  beer$ = new Observable<Beer>();

  isToastOpen = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, @Inject(BeerService) readonly beerService: BeerService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.beer$ = this.getBeer(id).pipe(
        tap(res => console.log(res)),
        map(([res]) => res),
        shareReplay({refCount: true, bufferSize: 1}));
    }
  }

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  getBeer(id: string) {
    const url = `https://api.punkapi.com/v2/beers/${id}`;
    return this.http.get<Beer[]>(url);
  }

  toFavorites(beer: Beer) {
    this.beerService.addToFavorite(beer);
    this.setOpen(true);
  }
}
