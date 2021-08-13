<template>
  <v-app id="inspire">
    <v-app-bar flat app class="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="mx-4"
        :src="require('../assets/yumeket.svg')"
        contain
        max-height="3vh"
        position="center left"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-main class="lighten-2">
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
  mounted() {
    this.$title = "Home";
  },
};
</script>
