<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title" style="margin: auto; text-align: center;">Edit Product</h2><br>
        <form @submit.prevent="editExistingProduct" class="my-4 product-form">
          <div class="form-group">
            <label for="productName">Name:</label>
            <input type="text" v-model="editedProduct.name" class="form-control" id="productName" required>
          </div>
          <div class="form-group">
            <label for="productDescription">Description:</label>
            <input type="text" v-model="editedProduct.description" class="form-control" id="productDescription" required>
          </div>
          <div class="form-group">
            <label for="productPrice">Price:</label>
            <input type="text" v-model="editedProduct.price" @input="validatePrice" class="form-control" id="productPrice" required>
          </div>
          <div class="button-group">
            <button type="submit" class="btn-add">Save Changes</button>
            <button type="button" @click="cancelEdit" class="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import alertify from 'alertifyjs';

export default {
  name: 'EditProduct',
  data() {
    return {
      editedProduct: {
        name: '',
        description: '',
        price: 0,
      },
    };
  },
  created() {
    const index = this.$route.params.id;
    const product = this.$store.state.products[index];
    if (product) {
      // Set the editedProduct to the selected product data
      this.editedProduct = { ...product };
    }
  },
  methods: {
    editExistingProduct() {
      const index = this.$route.params.id;
      this.$store.dispatch('editProduct', { index, updatedProduct: this.editedProduct })
        .then(() => {
          // Show success alert using Alertify
          alertify.success('Product Updated Successfully!');
          this.$router.push({ path: '/', query: { message: 'Successfully Updated!' } });
        })
        .catch(error => {
          console.error('Error updating product:', error);
          alertify.error('Failed to update product');
        });
    },
    cancelEdit() {
      this.$router.push('/');
    },
    validatePrice() {
      // Remove non-numeric characters from price
      this.editedProduct.price = this.editedProduct.price.replace(/\D/g, '');
    }
  },
  mounted() {
    alertify.set('notifier', 'position', 'top-right');
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.product-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-form input {
  width: calc(100% - 20px); 
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product-form button {
  width: calc(50% - 5px);
  margin-right: 10px; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-add {
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;
}

.btn-add:hover {
  background-color: darkgreen;
}

.btn-cancel {
  background-color: orange;
  color: #fff;
  border: none;
  cursor: pointer;
}

.btn-cancel:hover {
  background-color: darkorange;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>