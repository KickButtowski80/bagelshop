<template>
  <div>
    <div v-if="showError['situation']">
    <!-- 
basically, when you close the alert, the value of the alert goes to false
so you need to turn it to true when there is an error  :value="showError.situation" -->
      <app-alert :text="showError.message"  :value.sync="showError.situation"></app-alert>
    </div>
    <h1 align="center">{{ title }}</h1>
    <v-simple-table od="menu-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Add</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in menuItems" :key="item.name">
            <td>
              <span id="id_name">{{ item.name }}</span>
              <br />
              <span id="menu_item_description">{{ item.description }}</span>
            </td>
            <td>{{ item.price }}</td>
            <td>
              <v-btn text v-on:click="addToBasket(item)">
                <v-icon color="orange">1add_shopping_cart</v-icon>
                <span></span>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  name: 'LeftTableMenu',
  data() {
    return {
      title: "Menu Items", 
    };
  },
  methods: {
    addToBasket(item) {
      this.$store.dispatch("addToBasket", item);
    },
  },
  computed: {
    showError() {
      return this.$store.getters.showError;
    },
    menuItems() {
      return this.$store.getters.menuItems;
    },
  },
};
</script>
<style lang="scss" scoped>
tr th {
  font-weight: 300;
}
#id_name {
  font-weight: bold;
}
tr td {
  padding: 10px 10px 16px;
}
#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: map-get($colors, darkgrey);
  font-size: 13px;
}
</style>
