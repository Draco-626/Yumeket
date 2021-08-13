<template>
  <v-app id="inspire">
    <v-main class="white lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet class="pt-16" min-height="70vh" rounded="lg">
              <div class="pt-16 text-center">
                <v-col class="pt-16" cols="12">
                  <v-img
                    :src="require('../assets/yumeket.svg')"
                    class="my-3"
                    contain
                    height="70"
                  />
                </v-col>
                <v-col class="mb-4">
                  <p class="subheading font-weight-regular">
                    Spice up your creating process
                  </p>
                </v-col>
                <v-col class="mb-1">
                  <v-btn rounded class="create" style="width: 15rem">
                    Create an account
                  </v-btn>
                </v-col>
                <v-col class="mb-4">
                  <v-btn rounded class="login" style="width: 15rem">
                    Login
                  </v-btn>
                </v-col>
                <v-col class="mt-4"> Begin with an existing account </v-col>
                <v-col class="mt-4">
                  <v-btn icon v-on:click="metamask()">
                    <v-img
                      :src="require('../assets/metamask.svg')"
                      class="my-3"
                      contain
                      height="70"
                    />
                  </v-btn>
                </v-col>
                <!-- <v-col class="mt-8">
                  <v-divider></v-divider>
                </v-col> -->
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  created: function () {
    if (localStorage.getItem("address") != null) {
      this.$router.push("/");
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    metamask() {
      this.$router.push("metamask-auth");
    },
  },
};
</script>

<style scoped>
.create {
  background: linear-gradient(90deg, #72edf2 -20.33%, #5151e5 119.33%);
  color: white;
  text-transform: none !important;
}
.login {
  background-color: rgba(0, 0, 0, 0.04) !important;
  text-transform: none !important;
}
</style>
