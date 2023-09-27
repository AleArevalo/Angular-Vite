import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./components/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: (): any => import('./components/about.component').then(c => c.AboutComponent)
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }