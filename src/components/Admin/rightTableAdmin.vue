<template>
  <div>
    <h1 align="center">{{ title }}</h1>
    <span style="white-space: pre-line" > {{ info }}</span>
   
  </div>
</template>
<script>
export default {
  name: "LeftTableAdmin",
  data() {
    return {
      title: "Recent Activites",
    };
  },
  computed: {
    info() {
      return this.$store.getters.message;
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
