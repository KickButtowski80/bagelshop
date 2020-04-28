<template>
  <v-container>
    <v-row>
      <v-col md="5" offset-md="1">
        <div class="pa-2">
            <left-table></left-table>
        </div>
      </v-col>
      <v-col md="4" offset-md="1">
        <div class="pa-2">
            <right-table></right-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import leftTabelMenu from '../components/Menu/leftTableMenu' 
import rightTableMenu from '../components/Menu/rightTableMenu'
export default {
  name: "Menu",
  components:{
      'left-table': leftTabelMenu,
      'right-table' : rightTableMenu
  }
};
</script>

<style lang="scss" scoped>
</style>