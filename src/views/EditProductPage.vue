<template>
    <div>
      <edit-product :product="product" />
      <delete-product />
    </div>
  </template>
  
  <script>
  import EditProduct from '@/components/EditProduct.vue';
  import DeleteProduct from '@/components/DeleteProduct.vue';
  
  export default {
    components: {
      EditProduct,
      DeleteProduct
    },
    computed: {
      product() {
        return this.$store.state.products.find(product => product.id === this.$route.params.id);
      }
    }
  };
  </script>
  