<template>
     <v-container>
    <v-row>
      <v-col md="5" offset-md="1">
        <div class="pa-2 ">
            <left-table></left-table>
        </div>
      </v-col>
      <v-col md="4" offset-md="1">
        <div class="pa-2 ">
            <right-table></right-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import leftTabelAdmin from '../components/Admin/leftTableAdmin' 
import rightTableAdmin from '../components/Admin/rightTableAdmin'
export default {
  name: "Admin",
  components:{
      'left-table': leftTabelAdmin,
      'right-table' : rightTableAdmin
  }
};
 
</script>
<style lang="scss" scoped>

</style>