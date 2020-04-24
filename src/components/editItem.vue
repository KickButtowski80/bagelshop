<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="orange" v-on="on" text>
        <v-icon>edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline"
          >Edit {{ name }}
          <v-icon color="orange">info</v-icon>
        </span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form">
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
            ></v-text-field>
            <v-text-field
              v-model="price"
              prefix="$"
              label="Price"
            ></v-text-field>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="onSaveChanges">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["theItem"],
  data() {
    return {
      dialog: false,
      name: this.theItem.name,
      description: this.theItem.description,
      price: this.theItem.price,
      index: this.theItem.index,
    };
  },
  created() {
    console.log(this.theItem);
  },
  methods: {
    onSaveChanges() {
      if (this.$refs.form.validate()) {
        this.dialog = false;

        let editedItem = {
          index: this.index,
          name: this.name,
          description: this.description,
          price: this.price,
        };

        this.$store.dispatch("editItem", editedItem);
        this.$refs.form.reset();
      }
    },
  },
};
</script>
