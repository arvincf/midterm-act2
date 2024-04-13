import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state, { index, updatedProduct }) {
      Vue.set(state.products, index, updatedProduct);
    },
    DELETE_PRODUCT(state, index) {
      state.products.splice(index, 1);
    },
  },
  actions: {
    addProduct({ commit }, product) { // Corrected parameter name
      commit("ADD_PRODUCT", product); // Corrected variable name
    },
    updateProduct({ commit }, { index, updatedProduct }) {
      commit("UPDATE_PRODUCT", { index, updatedProduct });
    },
    deleteProduct({ commit }, index) {
      commit("DELETE_PRODUCT", index);
    },
  },
});
