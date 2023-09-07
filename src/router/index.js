import Vue from "vue";
import VueRouter from "vue-router";
import Catalog from '@/pages/CatalogPage';
import ProductPage from '@/pages/ProductPage';
import BasketPage from '@/pages/BasketPage'
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(VueRouter);

const routes = [
    { name: 'catalog', component: Catalog, path: '/catalog' },
    { name: 'product', component: ProductPage, path: '/product/:id' },
    { name: 'basket', component: BasketPage, path: '/basket' },
    { name: 'notFound', component: NotFoundPage, path: '*' }
];

const router = new VueRouter({
    routes
});

export default router;