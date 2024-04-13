<template>
  <div id="app">
    <product-list :products="products" />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import store from "./store";

export default {
  name: "App",
  components: {
    ProductList,
  },
  computed: {
    products() {
      return store.state.products;
    },
  },
};
</script>

<style>
/* Add your CSS styling here */
</style>
