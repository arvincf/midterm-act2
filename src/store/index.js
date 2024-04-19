// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { name: "Product 1", description: "Description 1", price: 10 },
      { name: "Product 2", description: "Description 2", price: 20 },
      { name: "Product 3", description: "Description 3", price: 30 },
    ], // Default products
  },
  mutations: {
    // Mutations to add, edit, and delete products
    addProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, { index, updatedProduct }) {
      state.products.splice(index, 1, updatedProduct);
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
  },
  actions: {
    // Actions to call mutations
    addProduct({ commit }, product) {
      commit("addProduct", product);
    },
    editProduct({ commit }, payload) {
      commit("editProduct", payload);
    },
    deleteProduct({ commit }, index) {
      commit("deleteProduct", index);
    },
  },
});
