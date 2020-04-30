<template>
  <v-dialog v-model="dialog" persistent max-width="410">
    <template v-slot:activator="{ on }">
      <v-btn depressed color="happy" v-on="on">{{
        ArchiveOrderInfo.index
      }}</v-btn>
    </template>
    <v-card class="mx-auto" max-width="400" tile>
      <v-card-title class="headline grey lighten-2" primary-title>
        the Order Info
      </v-card-title>
      <v-card-text>
 
        Total Price: {{ArchiveOrderInfo.totalPrice }}
        <br/>
        Order Includes:
        <ol v-for="item in ArchiveOrderInfo.payload" :key="item.name">
          <li>
            name:{{ item.name }}|
            price:{{item.price}}|
            quantity: {{ item.quantity }}
          </li>
        </ol>
      </v-card-text>
      <v-card-actions>
        <v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ArchiveOrderInfo() {
      return this.info;
    },
  },
};
</script>

<style lang="scss" scoped></style>
