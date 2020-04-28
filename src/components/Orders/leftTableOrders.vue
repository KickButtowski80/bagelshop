<template>
  <div>
    <h1 align="center">{{ title }}</h1>
    <v-row>
      <v-col cols="12" md="1" class="pa-2">
        <p class="font-weight-bold body-1 pl-1 darkgrey--text">Info:</p>
      </v-col>
      <v-col cols="12" md="4" class="pa-2 pl-5" id="rowsButtons">
        <v-row>
          <div
            class="d-flex align-center justify-center complete status_box white--text"
          >
            Complete
          </div>
          <span class="pl-2">Done</span>
        </v-row>
        <v-row>
          <div
            class="d-flex align-center justify-center inprogress status_box white--text"
          >
            InProgress
          </div>
          <span class="pl-2">InProgress</span>
        </v-row>
        <v-row>
          <div
            class="d-flex align-center justify-center incomplete status_box white--text"
          >
            Unstarted
          </div>
          <span class="pl-2">UnStarted</span>
        </v-row>
      </v-col>
      <v-col cols="12" md="7" class="pa-2 pl-2" id="rightButtons">
        <div
          class="d-flex align-center justify-center complete status_box white--text"
        >
          Complete
        </div>
        <div
          class="d-flex align-center justify-center inprogress status_box white--text"
        >
          InProgress
        </div>
        <div
          class="d-flex align-center justify-center incomplete status_box white--text"
        >
          Unstarted
        </div>
        <p class="font-weight-light caption pl-1 darkgrey--text">
          <b>Simple click</b>to switch stage.e.g.complete => inProgress =>
          dbclickthe box to reset to 'unstarted'
        </p>
        <span class="font-weight-light caption pl-1 darkgrey--text">
          <v-icon>archive</v-icon>
          Archive to hide it from orders list
        </span>
      </v-col>
    </v-row>
    <v-divider color="black"></v-divider>
    <v-row>
      <v-col class="font-weight-bold headline pl-1 mb-5 darkgrey--text"
        >Orders:</v-col
      >
    </v-row>
    <v-row class="pa-2 ">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Order #</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Item</th>
              <th class="text-left">Price</th>
              <th class="text-left">Status</th>
              <th class="text-left">Archive</th>
              <th class="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.name }}</td>
              <td>
                <v-btn icon>
                  <v-icon>archive</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn icon>
                  <v-icon>delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LeftTableOrders",
  data() {
    return {
      title: "Orders",
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#rightButtons div {
  display: inline-flex !important;
}
#rowsButtons .row:first-child {
  height: 3.5vh;
}
#rowsButtons .row:last-child {
  height: 5vh;
}
.status_box {
  height: 35px;
  width: 90px;
  font-size: 16px;
  border-radius: 3px;
  color: gray;
}
</style>
