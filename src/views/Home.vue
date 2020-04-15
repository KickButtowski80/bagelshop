<template>
  <v-container grid-list-xs>
    <v-row align-self="center" class="info_box">
      <v-col sm="9" xs="12" offset-sm="2">
        <h1>IT Bagel Shop</h1>
        <div>
          <p>Buy the bagel that was made from the finest ingredients</p>
        </div>
      </v-col>
    </v-row>
    <v-row align-self="center" class="info_box">
      <v-col sm="3" xs="12" offset-sm="1">
        <h1>Our Bagels</h1>
        <div>
          <p>Come on teast the best bagel you can find</p>
        </div>
      </v-col>
      <v-col sm="4" xs="12">
        <h1>Our Bagels</h1>
        <div>
          <p>Come on teast the best bagel you can find</p>
        </div>
      </v-col>
      <v-col sm="4" xs="12">
        <h1>Our Bagels</h1>
        <div>
          <p>Come on teast the best bagel you can find</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss">
 
.info_box .col h1 {
  @include infobox_mixin(
    5px,
    map-get($colors, darkgrey),
    10px,
    5px,
    map-get($colors, inprogress)
  );
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
}
.info_box p {
  background-color: #f59f65;
  padding: 20px;
}

.row:first-child {
  height: 40vh;
}

.row:last-child {
  height: 40vh;
}
</style>
