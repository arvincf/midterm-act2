<template>
    <div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
      <button @click="deleteItem">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ["product"],
    methods: {
      deleteItem() {
        this.$emit("delete");
      },
    },
  };
  </script>
  