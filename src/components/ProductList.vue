<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button @click="editProduct(product)">Edit</button>
      <button @click="deleteProduct(product.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array,
  },
  methods: {
    editProduct(product) {
      this.$router.push({ name: 'EditProduct', params: { id: product.id } });
    },
    deleteProduct(productId) {
      this.$store.dispatch('deleteProduct', productId);
    }
  }
};
</script>
