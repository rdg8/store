import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },

    {
        path: 'products',
        component: ProductsPageComponent
    },

    {
        path: 'products/:slug/:id',
        component: ProductPageComponent
    },

    {
        path: '**',
        component: Error404PageComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);