<template>
  <div>
    <h2>Edit Product</h2>
    <form @submit.prevent="updateProduct">
      <input type="text" v-model="editedProduct.name" required />
      <input type="text" v-model="editedProduct.description" required />
      <input type="number" v-model.number="editedProduct.price" required />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedProduct: { ...this.product }
    };
  },
  props: {
    product: Object
  },
  methods: {
    updateProduct() {
      this.$store.dispatch('updateProduct', this.editedProduct);
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
