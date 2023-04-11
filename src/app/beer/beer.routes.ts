import { Routes } from '@angular/router';
import { BeerPage } from './beer.page';

export const routes: Routes = [
  {
    path: 'beer',
    component: BeerPage,
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: '',
        redirectTo: '/beer/main',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/beer/main',
    pathMatch: 'full',
  },
];
