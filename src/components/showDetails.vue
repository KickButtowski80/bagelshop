<template>
  <v-dialog v-model="dialog" persistent max-width="300">
    <template v-slot:activator="{ on }">
      <v-btn depressed fab color="happy" v-on="on">items</v-btn>
    </template>
    <v-card class="mx-auto" max-width="300" tile>
      <v-subheader>List Of Items</v-subheader>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Price</th>
            </tr>
          </thead>
          <tbody>
        
            <tr v-for="item in payloadListInfo" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <th>{{ item.price }}</th>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["payloadList"],
  data() {
    return {
      dialog: false,
      item: 1,
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" },
      ],
    };
  },
  computed: {
    payloadListInfo() {
      return this.payloadList;
    },
  },
};
</script>
