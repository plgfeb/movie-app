<template>
  <div class="SerieDettagli ml-10 mr-10">
    <h1>
      {{ tv.original_name }}
    </h1>

    <h2>
      {{ tv.tagline }}
    </h2>

    <div class="flex justify-center">
      <img :src="getPosterPath(tv)" class="w-200 mt-10" />
    </div>

    <h3 class="mt-10">TRAMA: {{ tv.overview }}</h3>

    <p class="text-center text-base font-semibold mt-10">
      LINGUA ORIGINALE: {{ tv.original_language }}
    </p>

    <p class="text-center text-base font-semibold">
      NUMERO DI EPISODI: {{ tv.number_of_episodes }} 
    </p>

    <h3><indietro></indietro></h3>
  </div>
</template>
  
  <script>
import Indietro from "../components/Indietro.vue";
export default {
  data() {
    return {
      tv: {},
    };
  },
  methods: {
    async loadTv() {
      await fetch(
        "https://api.themoviedb.org/3/tv/" +
          this.$route.params.id +
          "?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.tv = data;
        });
    },
    getPosterPath(tv) {
      return tv.backdrop_path === null
        ? "https://image.tmdb.org/t/p/w500/" + tv.poster_path
        : "https://image.tmdb.org/t/p/w500/" + tv.backdrop_path;
    },
  },
  mounted() {
    this.loadTv();
  },
  components: { Indietro },
};
</script>