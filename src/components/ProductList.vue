<template>
    <div>
      <div v-for="product in products" :key="product.id">
        <ProductItem :product="product" @delete="deleteProduct(product.id)" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductItem from "./ProductItem.vue";
  import { getAllProducts, deleteProduct } from "../data/products.js";
  
  export default {
    components: {
      ProductItem,
    },
    data() {
      return {
        products: getAllProducts(),
      };
    },
    methods: {
      deleteProduct(id) {
        deleteProduct(id);
        this.products = getAllProducts();
      },
    },
  };
  </script>