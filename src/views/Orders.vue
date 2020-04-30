<template>
  <v-container fluid>
    <v-row>
      <v-col md="6" xs="6" offset-md="1">
        <div class="pa-2 ">
          <left-table></left-table>
        </div>
      </v-col>
      <v-col md="5" xs="5" >
        <div class="pa-2 ">
          <right-table></right-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import leftTableOrders from "../components/Orders/leftTableOrders";
import rightTableOrders from "../components/Orders/rightTableOrders";
export default {
  name: "Orders",
  components: {
    "left-table": leftTableOrders,
    "right-table": rightTableOrders,
  },
  data() {
    return {};
  },
};
</script>
