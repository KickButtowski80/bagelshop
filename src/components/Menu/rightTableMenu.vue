<template>
  <div>
    <h1 align="center">{{ title }}</h1>
    <v-alert type="info" icon="mdi-emoticon-sad" v-if="basketStatus">
      Empty Basket, please add some to basket
    </v-alert>
    <div v-if="!basketStatus">
      <v-alert
        v-if="alert"
        type="success"
        icon="mdi-emoticon-happy"
        transition="fade-transition"
      >
        thank you for your business
      </v-alert>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Quantity</th>
              <th class="text-left">Name</th>
              <th class="text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in basket" :key="item.name">
              <td>
                <v-icon @click="increaseQuantity(item)">add_box</v-icon>
                <span>{{ item.quantity }}</span>
                <v-icon @click="decreaseQuantity(item)"
                  >indeterminate_check_box
                </v-icon>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-divider color="black"></v-divider>
      <v-row id="basket_checkout" style="margin: 0">
        <v-col>
          <p>Subtotal:</p>
          <p>Delivery:</p>
          <p>Total amount:</p>
        </v-col>
        <v-col class="text-right">
          <p>${{ subTotalResult }}</p>
          <p>$10</p>
          <p class="font-weight-bold">${{ totalPriceResult }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn depressed class="orange" v-on:click="submitOrder">
          <v-icon>shopping_basket</v-icon>
        </v-btn>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "RightTableMenu",
  data() {
    return {
      title: "Current Basket",
      alert: false,
    };
  },
  watch: {
    basketStatus: {
      handler(newVal, oldVal) {
        this.alert = !newVal;
        setTimeout(() => {
          this.alert = !oldVal;
        }, 5000);
      },
    },
  },
  computed: {
    //you cannot use async like setTimeout inside computed func
    basket() {
      return this.$store.getters.basket;
    },
    basketStatus() {
      return this.$store.getters.basket.length === 0;
    },
    subTotalResult() {
      return this.$store.getters.subTotal;
    },
    totalPriceResult() {
      return this.$store.getters.totalPrice;
    },
  },
  methods: {
    increaseQuantity(item) {
      this.$store.dispatch("increaseQuantity", item);
    },
    decreaseQuantity(item) {
      this.$store.dispatch("decreaseQuantity", item);
    },
    submitOrder() {
      this.$store.dispatch("submitOrder", this.basket);
    },
  },
};
</script>

<style lang="scss" scoped>
#basket_checkout {
  font-size: 13px;
}

#basket_checkout p:first-child {
  line-height: 2px;
}
</style>
