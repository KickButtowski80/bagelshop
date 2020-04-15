<template>
  <v-container>
    <v-row>
      <v-col md="5" offset-md="1">
        <div class="pa-2 info">
            <left-table></left-table>
        </div>
      </v-col>
      <v-col md="4" offset-md="1">
        <div class="pa-2 info">
            <right-table></right-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import leftTabelMenu from '../components/leftTableMenu' 
import rightTableMenuVue from '../components/rightTableMenu.vue';
export default {
  name: "Menu",
  components:{
      'left-table': leftTabelMenu,
      'right-table' : rightTableMenuVue
  }
};
</script>

<style lang="scss" scoped>
.info {
  border: 1px black solid;
}
</style>