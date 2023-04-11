import {Component} from '@angular/core';
import {InfiniteScrollCustomEvent, IonicModule} from '@ionic/angular';
import {BehaviorSubject, combineLatest, scan, switchMap, tap} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Beer} from "../interface";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, AsyncPipe, NgIf, NgForOf, HttpClientModule],
})
export class Tab1Page {

  loading$ = new BehaviorSubject(false);

  page$ = new BehaviorSubject(1);

  limit$ = new BehaviorSubject(5);

  beer$ = combineLatest([this.page$, this.limit$]).pipe(
    tap(() => this.loading$.next(true)),
    switchMap(([page, limit]) =>
      this.getBeers(page, limit).pipe(
        tap(() => this.loading$.next(false)),
        tap((res) => console.log(res)),
      ),
    ),
    scan((acc: Beer[], v) => [...acc, ...v], [])
    )

  constructor(private http: HttpClient) {
  }

  getBeers(page: number, limit: number) {
    const url = 'https://api.punkapi.com/v2/beers'
    const params = {
      page: page,
      per_page: limit
    }
    return this.http.get<Beer[]>(url, {params})
  }

  onIonInfinite(evt: Event) {
    this.page$.next(this.page$.value + 1);
    (evt as InfiniteScrollCustomEvent).target.complete().then();
  }

}
