<template>
  <div>
    <h2>Delete Product</h2>
    <p>Are you sure you want to delete this product?</p>
    <button @click="deleteProduct">Confirm</button>
    <button @click="$router.push({ name: 'Home' })">Cancel</button>
  </div>
</template>

<script>
export default {
  methods: {
    deleteProduct() {
      this.$store.dispatch('deleteProduct', this.$route.params.id);
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
