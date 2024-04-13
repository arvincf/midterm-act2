<template>
  <div id="app">
    <header>
      <h1>Product Management App</h1>
    </header>
    <main>
      <ProductList @added="refreshProducts" />
      <AddProduct @added="refreshProducts" />
    </main>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import AddProduct from "./components/AddProduct.vue";

export default {
  components: {
    ProductList,
    AddProduct,
  },
  methods: {
    refreshProducts() {
      window.location.reload();
    },
  },
};
</script>

<style>
/* Add your global styles here */
</style>
