<template>
  <div class="toprated">
    <h1>I film e le serie più votate:</h1>
  </div>
  <!--FILM-->
  <h3><font-awesome-icon icon="fa-solid fa-film" /></h3>
  <div class="overflow-x-scroll">
    <div>
      <div class="flex flex-row flex-nowrap">
        <div
          class="flex flex-col w-auto p-2 shrink-0"
          v-for="film in films"
          :key="film.id"
        >
          <router-link
            class="text-blue-50 hover:text-red-300"
            id="image"
            :to="`/film/dettagli/${film.id}`"
          >
            <img :src="getPosterPath(film.backdrop_path)" class="w-200" />
            <h1 class="text-center text-base font-semibold">
              {{ film.title }}
            </h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!--SERIE-->
  <h3><font-awesome-icon icon="fa-solid fa-tv" /></h3>
  <div class="overflow-x-scroll">
    <div>
      <div class="flex flex-row flex-nowrap">
        <div
          class="flex flex-col w-auto p-2 shrink-0"
          v-for="tv in tvs"
          :key="tv.id"
        >
          <router-link
            class="text-blue-50 hover:text-red-300"
            id="image"
            :to="`/serie/dettagli/${tv.id}`"
          >
            <img :src="getPosterPath(tv.backdrop_path)" class="w-200" />
            <h1 class="text-center text-base font-semibold">{{ tv.name }}</h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      films: [],
      tvs: [],
    };
  },

  methods: {
    getFilm() {
      return fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US&page=1"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.films = posts.results;
        });
    },

    getSeries() {
      return fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US&page=2"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.tvs = posts.results;
        });
    },

    getPosterPath(path) {
      return "https://image.tmdb.org/t/p/w500/" + path;
    },
  },
  mounted() {
    this.getFilm();
    this.getSeries();
  },
};
</script>