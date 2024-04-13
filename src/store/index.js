import { createStore } from 'vuex';

export default createStore({
  state: {
    products: []
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      state.products.splice(index, 1, updatedProduct);
    },
    DELETE_PRODUCT(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
    updateProduct({ commit }, updatedProduct) {
      commit('UPDATE_PRODUCT', updatedProduct);
    },
    deleteProduct({ commit }, productId) {
      commit('DELETE_PRODUCT', productId);
    }
  },
  modules: {
  }
});
