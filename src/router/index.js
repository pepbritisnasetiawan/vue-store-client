import Vue from 'vue';
import VueRouter from 'vue-router';
import Product from '../views/product/IndexView.vue';
import ProductDetail from '../views/product/DetailView.vue';
import Cart from '../views/cart/IndexView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product,
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
