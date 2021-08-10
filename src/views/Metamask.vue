<template>
  <v-main>

    <vue-metamask userMessage="msg" @onComplete="onComplete"> </vue-metamask>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title>
          {{ errortitle }}
        </v-card-title>

        <v-card-text>
          {{ errordesc }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="back()"
          >
            Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-main>

  
</template>

<script>
import VueMetamask from "vue-metamask";
export default {
  components: {
    VueMetamask,
  },
  data () {
      return {
        dialog: false,
        errortitle: "Error",
        errordesc: ""
      }
    },
  methods: {
    onComplete(data) {
      console.log(data);
      if(data.type === "USER_DENIED_ACCOUNT_AUTHORIZATION"){
        this.dialog = true;
        this.errortitle = "Authorization denied"
        this.errordesc = "The authorization was denied, we didn't get any information, please try to reauth with Metamask"
      }
      else if(data.type === "NO_INSTALL_METAMASK"){
        this.dialog = true;
        this.errortitle = "Metamask not found"
        this.errordesc = "Can't find Metamask, is it installed correctly? If Metamask is running correctly, please try restarting your browser."
      }
      else if(data.type === "NETWORK_ERROR"){
        this.dialog = true;
        this.errortitle = "Wrong Network"
        this.errordesc = "Please switch to MainNet and try again"
      }
      else if(data.type === "NO_LOGIN"){
        this.dialog = true;
        this.errortitle = "Metamask not found"
        this.errordesc = "Metamask is not logged in, please initialise the wallet or restore it and try again"
      }
      else {
        localStorage.setItem("address", data.metaMaskAddress);
        this.$router.push("/");
      }
    },
    back() {
      this.dialog = false
      this.$router.push('login')
    }
  },
};
</script>

<style scoped>
</style>
