<template>
  <v-app>
    <v-content>
      <DrawerMenu />
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
