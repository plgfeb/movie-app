<template>
  <div class="login mt-40">
    <form class="form" @submit.prevent="login">
      <h3><indietro></indietro></h3>
      <h1>Gestisci il tuo account</h1>
      <h3>effettua il login</h3>
      <br /><br />
      <h3>
        <label for="username">Username </label>
        <input
          v-model="username"
          name="username"
          type="text"
          class="input text-neutral-800"
          style="border-radius: 10px;"
        />
      </h3>
      <h3>
        <label for="password">Password </label>
        <input
          v-model="password"  
          name="password"
          type="text"
          class="input text-neutral-800"
          style="border-radius: 10px;"
        />
      </h3>
      <br />
      <br />
      <h2>
        <button class="btn">
          <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
        </button>
      </h2>
    </form>
  </div>
</template>

  <script>
import Indietro from "../components/Indietro.vue";
export default {
  components: { Indietro },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      window.user = this.username;
      this.$router.push({ name: "protected" });
    },
  },
};
</script>