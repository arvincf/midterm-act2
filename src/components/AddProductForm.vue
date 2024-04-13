<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" placeholder="Name" required />
    <input type="text" v-model="description" placeholder="Description" required />
    <input type="number" v-model="price" placeholder="Price" required />
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
    };
  },
  methods: {
    submitForm() {
      const newProduct = {
        name: this.name,
        description: this.description,
        price: parseFloat(this.price),
      };
      this.$emit("submit", newProduct);
      this.name = "";
      this.description = "";
      this.price = "";
    },
  },
};
</script>
