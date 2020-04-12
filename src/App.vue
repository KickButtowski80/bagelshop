<template>
  <v-app id="app">
    <v-content>
      <DrawerMenu />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import DrawerMenu from "./components/DrawerMenu";

export default {
  name: "App",

  components: {
    DrawerMenu
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">

</style>
