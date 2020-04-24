import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let menu_item_last_index = 1;

export default new Vuex.Store({
  state: {
    showError: { situation: false, message: "" },
    message: "nothing so far..." + "\n",
    basket: [],
    menuItems: [
      {
        index: 0,
        name: "Frozen Yogurt",
        description: "just simple yougurt for your happiness",
        price: 2,
      },
      {
        index: 1,
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
    message: (state) => state.message,
    itemInBasket: (state) => (item) => {
      return state.basket.find((itemBas) => itemBas.name === item.name);
    },
    subTotal: (state) => state.subTotal,
    totalPrice: (state) => state.totalPrice,
  },
  mutations: {
    totalPrice(state) {
      state.totalPrice = state.subTotal + 10;
    },
    subTotal(state) {
      if (state.basket.length > 0) {
        state.subTotal = state.basket
          .map((item) => item.price * item.quantity)
          .reduce((accumulator, currentValue) => accumulator + currentValue);
      }
    },
    showError(state, payload) {
      state.showError.situation = payload.situation;
      state.showError.message = payload.message;
    },
    showMessage(state, payload) {
      state.message += payload;
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
    addNewToItems(state, payload) {
      payload.index = menu_item_last_index + 1;
      state.menuItems.push(payload);
      menu_item_last_index = menu_item_last_index + 1;
    },
    delItem(state, payload) {
      state.menuItems.splice(
        state.menuItems.findIndex((item) => item.name === payload.name),
        1
      );
    },

    editItem(state, payload) {
      let editItem = state.menuItems.find((item) => {
        return item.index === payload.index;
      });

      editItem.index = payload.index;
      editItem.name = payload.name;
      editItem.description = payload.description;
      editItem.price = payload.price;
    },
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
        commit("totalPrice");
        commit("showError", {
          situation: false,
          message: "",
        });
      }
    },
    increaseQuantity({ commit }, payload) {
      commit("increaseQuantity", payload);
      commit("subTotal");
      commit("totalPrice");
    },
    decreaseQuantity({ commit }, payload) {
      commit("decreaseQuantity", payload);
      commit("subTotal");
      commit("totalPrice");
    },
    addNewToItems({ commit }, payload) {
      commit("addNewToItems", payload);
      commit("showMessage", `Bagel ${payload.name} was Added` + "\n");
    },
    delItem({ commit }, payload) {
      commit("delItem", payload);
      commit("showMessage", `Bagel ${payload.name} was deleted` + "\n");
    },
    editItem({ commit }, payload) {
      commit("editItem", payload);
      commit("showMessage", `Bagel ${payload.name} was edited` + "\n");
    },
  },
  modules: {},
});
