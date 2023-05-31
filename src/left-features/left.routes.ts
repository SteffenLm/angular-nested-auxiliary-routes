import { Routes } from '@angular/router';
import { LeftOneComponent } from './LeftOne/left-one.component';
import { LeftTwoComponent } from './LeftTwo/left-two.component';

export const LEFT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./LeftTest/left-test.component').then((m) => m.LeftTestComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'one' },
      { path: 'one', component: LeftOneComponent },
      { path: 'two', component: LeftTwoComponent },
    ],
  },
];
