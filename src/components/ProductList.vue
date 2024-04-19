<template>
  <div>
    <h2 style="margin: auto; text-align: center;">Product List</h2><br>
    <button @click="goToAddProduct" class="btnProduct">+ Add Product</button><br ><br>
    <table class="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>$ {{ product.price }}</td>
          <td>
            <button @click="editProduct(index)" class="edit-button">Edit</button>
            <button @click="confirmDelete(index)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alertify from 'alertifyjs';

export default {
  name: 'ProductList',
  computed: {
    products() {
      return this.$store.state.products;
    },
    message() {
      return this.$route.query.message;
    },
  },
  methods: {
    editProduct(index) {
      this.$router.push(`/edit/${index}`);

    },
    confirmDelete(index) {
  alertify.confirm("Are you sure you want to delete this product?", () => {
    this.deleteProduct(index);
  }).set('labels', {
    ok: 'Yes',
    cancel: 'No'
  }).set('title', 'Delete');
  alertify.defaults.theme.ok = "btn btn-danger";
},
deleteProduct(index) {
  this.$store.dispatch('deleteProduct', index);
  // Show success alert in red color
  alertify.error('Product deleted successfully!!!', 'alert-danger');
  this.$router.push('/');
},
    goToAddProduct() {
      this.$router.push('/add');
    },
  },
  mounted() {
    alertify.set('notifier', 'position', 'top-right');
  },
};
</script>

<style>
.product-table {
  border-collapse: collapse;
  width: 100%;
}

.product-table th, .product-table td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.product-table th {
  background-color: #f2f2f2;
}

.alert-success {
  text-align: center;
  font-size: 20px;
  color: green;
}

.message {
  margin: 0;
}

.edit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
}

.edit-button:hover {
  background-color: #0056b3;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}

.btnProduct{
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 8%; 
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>