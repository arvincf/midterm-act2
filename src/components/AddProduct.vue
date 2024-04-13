<template>
    <div>
      <form @submit.prevent="addProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newProduct.name" required>
        <label for="description">Description:</label>
        <textarea id="description" v-model="newProduct.description" required></textarea>
        <label for="price">Price:</label>
        <input type="number" id="price" v-model.number="newProduct.price" required>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script>
  import { addProduct } from "../data/products.js";
  
  export default {
    data() {
      return {
        newProduct: {
          name: "",
          description: "",
          price: null,
        },
      };
    },
    methods: {
      addProduct() {
        addProduct(this.newProduct);
        this.$emit("added");
        this.newProduct = { name: "", description: "", price: null };
      },
    },
  };
  </script>
  