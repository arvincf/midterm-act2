<template>
  <div>
    <h2 style="margin: auto; text-align: center;">Add Product</h2><br>
    <form @submit.prevent="addNewProduct" class="product-form">
      <input type="text" v-model="newProduct.name" placeholder="Name" required><br>
      <input type="text" v-model="newProduct.description" placeholder="Description" required><br>
      <input type="text" v-model="newProduct.price" @input="validatePrice" placeholder="Price" required><br>
      <div class="button-group">
        <button type="submit" class="add-button">Add Product</button>
        <button type="button" @click="cancelAdd" class="cancel-button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';

export default {
  name: 'AddProduct',
  data() {
    return {
      newProduct: {
        name: '',
        description: '',
        price: 1,
      },
    };
  },
  methods: {
    addNewProduct() {
      this.$store.dispatch('addProduct', this.newProduct)
        .then(() => {
          // Reset newProduct data
          this.newProduct = {
            name: '',
            description: '',
            price: 1,
          };
          // Show success alert
          alertify.success('Product added successfully!!!');
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Error adding product:', error);
          alertify.error('Failed to add product');
        });
    },
    cancelAdd() {
      // Reset newProduct data
      this.newProduct = {
        name: '',
        description: '',
        price: 0,
      };
      this.$router.push('/');
    },
    validatePrice() {
      // Remove non-numeric characters from price
      this.newProduct.price = this.newProduct.price.replace(/\D/g, '');
    }
  },
  mounted() {
    alertify.set('notifier', 'position', 'top-right');
  },
};
</script>

<style scoped>
.product-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-form input {
  width: calc(100% - 22px);
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product-form button {
  width: 48%; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.add-button {
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;
}

.add-button:hover {
  background-color: darkgreen;
}

.cancel-button {
  background-color: orange;
  color: #fff;
  border: none;
  cursor: pointer;
}

.cancel-button:hover {
  background-color: darkorange;
}
</style>