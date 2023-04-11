import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./beer/beer.routes').then((m) => m.routes),
  },
];
