<template>
  <v-container>
    <h1 align="center">{{ title }}</h1>
    <v-row>
      <v-col>
        <p class="font-weight-bold body-1 darkgrey--text">Completed Orders</p>
      </v-col>
      <v-col>
        <p class="font-weight-bold body-1 darkgrey--text">
          Total orders: {{ archives.length }}
        </p>
      </v-col>
    </v-row>
    <v-row v-for="ar in archives" :key="ar.index">
      <p class="font-weight-bold body-1 complete--text darkgrey">
        OrderNumber:
        <archive-order-info :info="ar" />
      </p>
    </v-row>
    <v-divider color="black"></v-divider>
    <v-row>
      <v-col>Total Revenue: {{ totalRevenue }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
import archiveOrderInfo from "../archiveOrderInfo";
export default {
  name: "RigthTableOrder",
  components: {
    "archive-order-info": archiveOrderInfo,
  },
  data() {
    return {
      title: "Revenue",
    };
  },
  computed: {
    archives() {
      return this.$store.getters.archives;
    },
    totalOrdersNumber() {
      return this.$store.getters.orders.length;
    },
    totalRevenue() {
      return this.$store.getters.totalRevenue;
    },
    showError() {
      return this.$store.getters.showError;
    },
  },
};
</script>

<style lang="scss" scoped></style>
