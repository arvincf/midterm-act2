<template>
    <button @click="confirmDelete">Delete</button>
  </template>
  
  <script>
  export default {
    methods: {
      confirmDelete() {
        if (confirm("Are you sure you want to delete this product?")) {
          this.$emit("delete");
        }
      },
    },
  };
  </script>
  