import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showError: false,
    basket: [],
    menuItems: [
      {
        name: "Frozen Yogurt",
        description: "just simple yougurt for your happiness",
        price: 2,
      },
      {
        name: "Ice cream sandwich",
        description: "lesser suger more happniess inside your icecream",
        price: 2.37,
      },
    ],
  },
  getters: {
    menuItems: (state) => state.menuItems,
    basket: (state) => state.basket,
    showError: (state) => state.showError,
    // itemInBasket(state) {
    //   return item => {
    //     return state.basket.find(itemBas => {
    //       return itemBas.name === item.name
    //     })
    //   }
    // }
    itemInBasket: (state) => (item) => {
      return state.basket.find((itemBas) => itemBas.name === item.name);
    },
  },
  mutations: {
    showError(state, payload) {
      state.showError = payload;
    },
    addToBasket(state, payload) {
      state.basket.push({
        name: payload.name,
        price: payload.price,
        quantity: 1,
      });
    },
    increaseQuantity(state, payload) {
      let index_item_in_basket = state.basket.findIndex(
        (item) => item.name === payload.name
      );
      let obj = state.basket[index_item_in_basket];
      obj.quantity += 1;
    },
    decreaseQuantity(state, payload) {
      let index_item_in_basket = state.basket.findIndex(
        (item) => item.name === payload.name
      );
      let obj = state.basket[index_item_in_basket];
      obj.quantity -= 1;
      if (obj.quantity === 0) {
        state.basket.splice(index_item_in_basket, 1);
      }
    },
  },
  actions: {
    addToBasket({ getters, commit }, payload) {
      if (getters.itemInBasket(payload)) {
        commit("showError", `${payload.name} is already in your basket.`);
      } else {
        commit("addToBasket", payload);
        commit("showError", false);
      }
    },
    increaseQuantity({ commit }, payload) {
      commit("increaseQuantity", payload);
    },
    decreaseQuantity({ commit }, payload) {
      commit("decreaseQuantity", payload);
    },
  },
  modules: {},
});
