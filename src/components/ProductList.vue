<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <edit-product-form :product="product" @update="updateProduct(index, $event)" />
      <delete-product-button @delete="deleteProduct(index)" />
    </div>
    <add-product-form @submit="addProduct" />
  </div>
</template>

<script>
import AddProductForm from "./AddProductForm.vue";
import EditProductForm from "./EditProductForm.vue";
import DeleteProductButton from "./DeleteProductButton.vue";

export default {
  components: {
    AddProductForm,
    EditProductForm,
    DeleteProductButton,
  },
  props: {
    products: Array,
  },
  methods: {
    addProduct(product) {
      this.$emit("add", product);
    },
    updateProduct(index, updatedProduct) {
      this.$emit("update", { index, updatedProduct });
    },
    deleteProduct(index) {
      this.$emit("delete", index);
    },
  },
};
</script>
