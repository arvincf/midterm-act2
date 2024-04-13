<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="editedProduct.name" required />
    <input type="text" v-model="editedProduct.description" required />
    <input type="number" v-model="editedProduct.price" required />
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      editedProduct: {
        ...this.product,
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit("update", this.editedProduct);
    },
  },
};
</script>
