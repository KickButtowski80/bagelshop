<template>
  <div>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <v-list dense>
        <v-subheader class="display-1">Welcome</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <router-link tag="span" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
            </router-link>
            <router-link tag="span" :to="item.link">
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span>The Best Bagel</span>
        <span class="font-weight-light">by IT</span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "DrawerMenu",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { text: "Home", icon: "home", link: "/" },
      { text: "About", icon: "info", link: "/about" }
    ]
  })
};
</script>
<style lang="scss" scoped>
.v-list--dense .v-subheader {
  padding: 55px 49px;
}
.theme--light .v-icon {
  color: orange !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: orange !important;
}
</style>