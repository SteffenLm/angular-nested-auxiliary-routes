import { Routes } from '@angular/router';
import { CenterTestComponent } from './CenterTest/center-test.component';
import { CenterOneComponent } from './CenterOne/center-one.component';
import { CenterTwoComponent } from './CenterTwo/center-two.component';

export const CENTER_ROUTES: Routes = [
  {
    path: '',
    component: CenterTestComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'one' },
      { path: 'one', component: CenterOneComponent },
      { path: 'two', component: CenterTwoComponent },
    ],
  },
];
