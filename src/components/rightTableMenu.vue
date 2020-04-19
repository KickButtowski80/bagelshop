<template>
  <div>
    <h1 align="center">{{ title }}</h1>

    <v-alert type="info" icon="mdi-emoticon-sad" v-if="basketStatus">
      Empty Basket, please add some to basket
    </v-alert>
    <div v-else>
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
                  >indeterminate_check_box</v-icon
                >
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
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
          <p>$100</p>
          <p>$10</p>
          <p class="font-weight-bold">$110</p>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn depressed class="orange">
          <v-icon>shopping_basket</v-icon>
        </v-btn>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Current Basket",
    };
  },
  computed: {
    basket() {
      return this.$store.getters.basket;
    },
    basketStatus() {
      return this.$store.getters.basket.length === 0;
    },
  },
  methods: {
    increaseQuantity(item) {
      this.$store.dispatch("increaseQuantity", item);
    },
    decreaseQuantity(item) {
      this.$store.dispatch("decreaseQuantity", item);
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
