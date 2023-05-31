import { Routes } from '@angular/router';
import { RightOneComponent } from './RightOne/right-one.component';
import { RightTwoComponent } from './RightTwo/right-two.component';

export const RIGHT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./RightTest/right-test.component').then(
        (m) => m.RightTestComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'one',
      },
      {
        path: 'one',
        component: RightOneComponent,
      },
      {
        path: 'two',
        component: RightTwoComponent,
      },
    ],
  },
];
