<template>
  <div>
    <v-alert
      v-model="alertStatus"
      border="left"
      close-text="Close Alert"
      color="error  accent-4"
      dark
      dismissible
    >
      {{ text }}
    </v-alert>
  </div>
</template>
<script>
export default {
  props: ["value", "text"],
  data() {
    return {
      alert: this.value,
    };
  },

  computed: {
    alertStatus: {
      get: function() {
        return this.value;
      },
      set: function(newValue) {
        //  Avoid mutating a prop directly since the value will be overwritten whenever
        //  the parent component re-renders issue
        // using sync
        //<app-alert :text="showError.message"  :value.sync="showError.situation"></app-alert>
        // in leftTableMenu

        this.$emit("update:value", newValue);
      },
    },
  },
};
</script>
