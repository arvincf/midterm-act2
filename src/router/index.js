import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';
import AddProduct from '@/components/AddProduct.vue';
import EditProduct from '@/components/EditProduct.vue';

const routes = [
  { path: '/', component: ProductList },
  { path: '/add', component: AddProduct },
  { path: '/edit/:id', component: EditProduct, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
