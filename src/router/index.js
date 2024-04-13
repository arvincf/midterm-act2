import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddProduct from '../components/AddProduct.vue';
import EditProductPage from '../views/EditProductPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/edit-product/:id',
    name: 'EditProduct',
    component: EditProductPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
