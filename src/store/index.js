import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket: [],
    menuItems: [
      {
        name: "Frozen Yogurt",
        description: "just simple yougurt for your happiness",
        price: 2
      },
      {
        name: "Ice cream sandwich",
        description: "lesser suger more happniess inside your icecream",
        price: 2.37
      }
    ]
  },
  getters: {
    menuItems: state => state.menuItems,
    basket: state => state.basket
  },
  mutations: {
    addToBasket(state, payload) {
      state.basket.push({
        name: payload.name,
        price: payload.price,
        quantity: 0
      })
    },
    increaseQuantity(state,payload){
     
       let item_in_basket =  state.basket.findIndex((item ) => item.name === payload.name )
       let obj = state.basket[item_in_basket]
       obj.quantity += 1
      
    }
  },
  actions: {
    addToBasket({ commit }, payload) {
      commit('addToBasket', payload)
    },
    increaseQuantity({commit}, payload){
      commit('increaseQuantity', payload)
    }
  },
  modules: {
  }
})
