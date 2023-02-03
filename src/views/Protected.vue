<template>
    <div class="mt-40"> <br> <br> <br>
      <h1>Bentornato, {{username}}</h1>
      <h3>gestisci il tuo account</h3>
      <h2 class="mt-40"><button @click="logout"><font-awesome-icon icon="fa-solid fa-right-from-bracket" /></button></h2>
      
    </div>
  </template>

  <script>
  export default {
    data(){
      return {
        username: window.user
      }
    },
    methods:{
      logout(){
        window.user = null
        this.$router.push({name: 'Login'})
      }
    }
  }
  </script>