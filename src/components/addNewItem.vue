<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="orange" v-on="on" text>
        <span> Add New</span>
        <v-icon> add </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline"
          >Add New
          <v-icon color="orange"> celebration</v-icon>
          Bagel
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
        <v-btn color="blue darken-1" text @click="onSaveChanges">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    name: null,
    description: null,
    price: null,
  }),
  methods: {
    onSaveChanges() {
      if (this.$refs.form.validate()) {
        this.$emit("addNewItem", {
          name: this.name,
          description: this.description,
          price: this.price,
        });

        this.dialog = false;
        this.$refs.form.reset();
      }
    },
  },
};
</script>
