<template>
  <div class="FilmDettagli ml-10 mr-10">
    <h1>
      {{ film.original_title }}
    </h1>

    <h2>
      {{ film.tagline }}
    </h2>

    <div class="flex justify-center">
      <img :src="getPosterPath(film)" class="w-200 mt-10" />
    </div>

    <h3 class="mt-10">TRAMA: {{ film.overview }}</h3>

    <p class="text-center text-base font-semibold mt-10">
      LINGUA ORIGINALE: {{ film.original_language }}
    </p>

    <p class="text-center text-base font-semibold">
      DATA DI RILASCIO: {{ film.release_date }}
    </p>

    <p class="text-center text-base font-semibold">
      DURATA: {{ film.runtime }} minuti
    </p>

    <h3><indietro></indietro></h3>
  </div>
</template>

<script>
import Indietro from "../components/Indietro.vue";
export default {
  data() {
    return {
      film: {},
    };
  },
  methods: {
    async loadFilm() {
      await fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.$route.params.id +
          "?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.film = data;
        });
    },
    getPosterPath(film) {
      return film.backdrop_path === null
        ? "https://image.tmdb.org/t/p/w500/" + film.poster_path
        : "https://image.tmdb.org/t/p/w500/" + film.backdrop_path;
    },
  },
  mounted() {
    this.loadFilm();
  },
  components: { Indietro },
};
</script>