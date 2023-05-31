import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '', loadChildren: () => import('../center-features/center.routes').then(m => m.CENTER_ROUTES),
    },
    {
        path: 'left',
        outlet: 'left',
        loadChildren: () => import('../left-features/left.routes').then(m => m.LEFT_ROUTES)
    },
    {
        path: 'right',
        outlet: 'right',
        loadChildren: () => import('../right-features/right.routes').then(m => m.RIGHT_ROUTES)
    },
];
