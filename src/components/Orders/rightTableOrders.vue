<template>
  <v-container>
    <h1 align="center">{{ title }}</h1>
    <v-row>
      <v-col>Revenue</v-col>
    </v-row>
    <v-divider color="black"></v-divider>
    <v-row>
      <v-col>Completed Orders</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "Revenue",
    };
  },
};
</script>

<style lang="scss" scoped></style>
