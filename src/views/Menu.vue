<template>
  <v-container>
    <v-row>
      <v-col md="5" offset-md="1">
        <div class="pa-2 info">Left</div>
      </v-col>
      <v-col md="4" offset-md="1">
        <div class="pa-2 info">Right</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
.info {
  border: 1px black solid;
}
</style>