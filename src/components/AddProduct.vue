<template>
  <div>
    <h2>Add Product</h2>
    <form @submit.prevent="addProduct">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="text" v-model="description" placeholder="Description" required />
      <input type="number" v-model.number="price" placeholder="Price" required />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: null
    };
  },
  methods: {
    addProduct() {
      const product = {
        id: Math.random().toString(36).substr(2, 9),
        name: this.name,
        description: this.description,
        price: this.price
      };
      this.$store.dispatch('addProduct', product);
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
