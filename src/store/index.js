import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showError: { situation: false, message: "" },
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
    subTotal: 0,
    totalPrice: 0,
  },
  getters: {
    menuItems: (state) => state.menuItems,
    basket: (state) => state.basket,
    showError: (state) => state.showError,
    itemInBasket: (state) => (item) => {
      return state.basket.find((itemBas) => itemBas.name === item.name);
    },
    subTotal: (state) => state.subTotal,
    totalPrice: (state) => state.totalPrice,
  },
  mutations: {
    totalPrice(state) {
      state.totalPrice = state.subTotal + 10 ;
    },
    subTotal(state) {
      state.subTotal = state.basket
        .map((item) => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    },
    showError(state, payload) {
      state.showError.situation = payload.situation;
      state.showError.message = payload.message;
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
    addNewToItems(state, payload){
      state.menuItems.push(payload)
    }
  },
  actions: {
    addToBasket({ getters, commit }, payload) {
      if (getters.itemInBasket(payload)) {
        commit("showError", {
          situation: true,
          message: `${payload.name} is already in your basket.`,
        });
      } else {
        commit("addToBasket", payload);
        commit("subTotal");
        commit("totalPrice")
        commit("showError", {
          situation: false,
          message: "",
        });
      }
    },
    increaseQuantity({ commit }, payload) {
      commit("increaseQuantity", payload);
      commit("subTotal");
      commit("totalPrice")
    },
    decreaseQuantity({ commit }, payload) {
      commit("decreaseQuantity", payload);
      commit("subTotal");
      commit("totalPrice")
    },
    addNewToItems({commit}, payload){
      commit("addNewToItems", payload)
    }
  },
  modules: {},
});
