<template>
  <v-app id="app">
 
    <DrawerMenu />
    <v-content>
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
