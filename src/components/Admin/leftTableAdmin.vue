<template>
  <div>
    <h1 align="center">{{ title }}</h1>
    <v-simple-table od="menu-table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
              <add-new-item @addNewItem="addNewToItems"></add-new-item>
            </th>
            <th class="text-left">Price</th>
            <th class="text-left">Edit</th>
            <th class="text-left">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in menuItems" :key="item.name">
            <td>
              <span id="id_name">{{ item.name }}</span>
              <br />
              <span id="menu_item_description">{{ item.description }}</span>
            </td>
            <td>{{ item.price }}</td>
            <td>
              <v-btn text color="orange">
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn text color="orange">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import addNewItem from '../addNewItem'
export default {
  name: "LeftTableAdmin",
  components:{
      'add-new-item': addNewItem, 
  },
  data() {
    return {
      title: "Manage Bagles",
    };
  },
  methods: {
    addNewToItems(e) {
      this.title = "Add New Item";
      this.$store.dispatch("addNewToItems" , e )
    },
  },
  computed: {
    menuItems() {
      return this.$store.getters.menuItems;
    },
  },
};
</script>
<style lang="scss" scoped>
tr th {
  font-weight: 300;
}
#id_name {
  font-weight: bold;
}
tr td {
  padding: 10px 10px 16px;
}
#menu_item_description {
  font-style: italic;
  font-weight: 300;
  color: map-get($colors, darkgrey);
  font-size: 13px;
}
</style>
