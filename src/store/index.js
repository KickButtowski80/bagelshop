import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let menu_item_last_index = 1;
let order_last_index = 0;
// let archive_last_index = 0;

function findIndex(arry, name) {
  return arry.findIndex((item) => item.name === name);
}

export default new Vuex.Store({
  state: {
    showError: { situation: false, message: "" },
    message: "nothing so far..." + "\n",
    basket: [],
    orders: [],
    archives: [],
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
    totalRevenue: 0,
    _archive_last_index: 0,
  },
  getters: {
    menuItems: (state) => state.menuItems,
    basket: (state) => state.basket,
    orders: (state) => state.orders,
    archives: (state) => state.archives,
    showError: (state) => state.showError,
    message: (state) => state.message,
    itemInBasket: (state) => (item) => {
      return state.basket.find((itemBas) => itemBas.name === item.name);
    },

    orderInOrders: (state) => (theOrder) => {
      return state.orders.find((o) => o.index === theOrder.index);
    },
    subTotal: (state) => state.subTotal,
    totalPrice: (state) => state.totalPrice,
    totalRevenue: (state) => state.totalRevenue,
  },
  mutations: {
    totalPrice(state) {
      state.totalPrice = Number.parseFloat(state.subTotal + 10).toFixed(2);
    },
    subTotal(state) {
      if (state.basket.length > 0) {
        state.subTotal = state.basket
          .map((item) => item.price * item.quantity)
          .reduce((accumulator, currentValue) => accumulator + currentValue);
        state.subTotal = Number.parseFloat(state.subTotal).toFixed(2);
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
    //_ means private
    _increaseQuantity(state, payload) {
      const index_item_in_basket = findIndex(state.basket, payload.name);
      const obj = state.basket[index_item_in_basket];
      obj.quantity += 1;
    },
    _decreaseQuantity(state, payload) {
      const index_item_in_basket = findIndex(state.basket, payload.name);
      const obj = state.basket[index_item_in_basket];
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
      const editItem = state.menuItems.find((item) => {
        return item.index === payload.index;
      });

      editItem.index = payload.index;
      editItem.name = payload.name;
      editItem.description = payload.description;
      editItem.price = payload.price;
    },
    submitOrder(state, payload) {
      let obj = {};
      obj.index = order_last_index + 1;
      obj.totalPrice = state.totalPrice;
      obj.status = "Unstarted";
      //mereging obj means needing let
      obj = { ...obj, payload };
      state.orders.push(obj);
      order_last_index = order_last_index + 1;
      state.subTotal = 0;
      state.totalPrice = 0;
      state.basket = [];
    },
    delOrder(state, payload) {
      state.orders.splice(
        state.orders.findIndex((order) => order.index === payload.index),
        1
      );
    },
    setTotalRevenue(state, { totalPrice }) {
      state.totalRevenue = (
        parseFloat(state.totalRevenue) + parseFloat(totalPrice)
      ).toFixed(2);
    },
    archiveOrder(state, payload) {
      // payload.index = archive_last_index + 1;
      payload.index = (
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2, 5)
      ).toUpperCase();
      state.archives.push(payload);
      // archive_last_index = archive_last_index + 1;
    },
    changeStatus(state, payload) {
      let indexItem = state.orders.findIndex(
        (order) => order.index === payload.index
      );
      if (state.orders[indexItem].status === "Unstarted")
        state.orders[indexItem].status = "inprogress";
      else if (state.orders[indexItem].status === "inprogress") {
        state.orders[indexItem].status = "complete";
      }
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
      commit("_increaseQuantity", payload);
      commit("subTotal");
      commit("totalPrice");
    },
    decreaseQuantity({ commit }, payload) {
      commit("_decreaseQuantity", payload);
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
    submitOrder({ commit }, payload) {
      commit("submitOrder", payload);
      // do not forget the show message after this later
    },
    delOrder({ commit }, payload) {
      commit("delOrder", payload);
      commit("showError", {
        situation: true,
        message: `order #${payload.index}  was deleted.`,
      });
    },
    archiveOrder({ commit }, payload) {
      if (payload.status === "complete") {
        commit("archiveOrder", payload);
        commit("setTotalRevenue", payload);
        commit("delOrder", payload);
      } else {
        commit("showError", {
          situation: true,
          message: `order #${payload.index} is not recieved by the customer`,
        });
      }
    },
    changeStatus({ commit }, payload) {
      commit("changeStatus", payload);
    },
  },
  modules: {},
});
