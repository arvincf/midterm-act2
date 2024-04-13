<template>
  <div>
    <form @submit.prevent="updateProduct">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="editedProduct.name" required>
      <label for="description">Description:</label>
      <textarea id="description" v-model="editedProduct.description" required></textarea>
      <label for="price">Price:</label>
      <input type="number" id="price" v-model.number="editedProduct.price" required>
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
import { updateProduct } from "../data/products.js";

export default {
  props: ["product"],
  data() {
    return {
      editedProduct: { ...this.product },
    };
  },
  methods: {
    updateProduct() {
      updateProduct(this.editedProduct);
      this.$emit("updated");
    },
  },
};
</script>
