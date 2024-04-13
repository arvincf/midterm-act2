<template>
  <div>
    <product-list :products="products" />
    <router-link :to="{ name: 'AddProduct' }">Add Product</router-link>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductList
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>
