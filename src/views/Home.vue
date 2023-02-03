
<template>
  <div v-if="!searchResult || (searchResult && !searchResult.length)">
    <h1>ultime uscite:</h1>
  <!--SLIDER ORIZZONTALE-->
  <div class="overflow-x-scroll">
    <div>
      <div class="flex flex-row flex-nowrap">
        <div
          class="flex flex-col w-auto p-2 shrink-0"
          v-for="film2 in films2"
          :key="film2.id"
        >
          <router-link
            class="text-blue-50 hover:text-red-300"
            id="image"
            :to="`/film/dettagli/${film2.id}`"
          >
            <img :src="getPosterPath(film2)" class="w-200" />
            <h1 class="text-center text-base font-semibold mt-3">
              {{ film2.title }}
            </h1>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <br />

  <!--COLONNA FILM-->
  <div class="split2 border-t border-neutral-700">
    <div class="border-r border-neutral-700">
      <router-link id="logo" :to="{ name: 'Film' }">
        <h1 class="p-1 text-2xl font-semibold text-blue-50 hover:text-red-300 font-medium mt-5">
          <font-awesome-icon icon="fa-solid fa-film" /> <br />
          FILM
        </h1>
      </router-link>
      <div
        class="flex flex-col w-auto p-1 shrink-0"
        v-for="film in films"
        :key="film.id"
      >
        <router-link
          class="text-blue-50 hover:text-red-300"
          id="image"
          :to="`/film/dettagli/${film.id}`"
        >
          <img :src="getPosterPath(film)" class="h-48 w-96 object-cover" />
          <p class="text-center text-base font-semibold mt-2">
            {{ film.title }}
          </p>
        </router-link>

        <br />
      </div>
    </div>

    <!--COLONNA SERIE-->
    <div class="">
      <router-link id="logo" :to="{ name: 'Serie' }">
        <h1 class="p-1 text-2xl font-semibold text-blue-50 hover:text-red-300 font-medium mt-5">
          <font-awesome-icon icon="fa-solid fa-tv" /> <br />
          SERIE
        </h1>
      </router-link>

      <div
        class="flex flex-col w-auto p-1 shrink-0"
        v-for="tv in tvs"
        :key="tv.id"
      >
        <router-link
          class="text-blue-50 hover:text-red-300"
          id="image"
          :to="`/serie/dettagli/${tv.id}`"
        >
          <img :src="getPosterPath(tv)" class="h-48 w-96 object-cover" />
          <p class="text-center text-base font-semibold mt-2">
            {{ tv.name }}
          </p>
        </router-link>
        <br />
      </div>
    </div>
  </div>
  <div class="clearer"></div>

  <div class="justify flex-center">
    <div class="container mx-auto px-4"><!--sisisisisi--></div>
  </div>
  </div>
  <div v-else>
      <h3>risultati ricerca:</h3>
      <div class="flex flex-row flex-wrap">
        <div v-for="item in searchResult" :key="item.id">
          <div class="basis-1/4 p-2">
          <router-link
            class="text-blue-50 hover:bg-slate-100 hover:text-red-300"
            id="image"
            :to="`/film/dettagli/${item.id}`"
          >
            <img :src="getPosterPath(item)" class="h-48 w-96 object-cover" />
            <h1 class="text-xl font-semibold">
              {{ item.title }}
            </h1>
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
      films2: [],
      searchResult: [],
      search: ''
    };
  },
  watch: {
    "$route.query.search": {
      handler: function (value) {
        if (value != undefined) {
          this.search = value;
          this.searchFilms();
        }
    
      },
      deep: true,
      immediate: true,
    },
    "$route.query": {
      handler: function (value) {
        if (value && !Object.hasOwn(value, 'search')) {
          this.searchResult = [];
          this.getFilm();
          this.getFilm2();
          this.getSeries();
        }
    
      },
      deep: true,
      immediate: true,
    }
  },
  methods: {
    searchFilms() {
      return fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + this.search + "&api_key=6f9286d54de4891ea7a5c91779e09786&page=1"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.searchResult = posts.results;
        });
    },
    getFilm() {
      return fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US&page=2"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.films = posts.results;
        });
    },

    getFilm2() {
      return fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US&page=1"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.films2 = posts.results;
        });
    },

    getSeries() {
      return fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=6f9286d54de4891ea7a5c91779e09786&language=it-US&page=2"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.tvs = posts.results;
        });
    },

    getPosterPath(film) {
      return film.backdrop_path === null
        ? "https://image.tmdb.org/t/p/w500/" + film.poster_path
        : "https://image.tmdb.org/t/p/w500/" + film.backdrop_path;
    },

    getPosterPath(tv) {
      return tv.backdrop_path === null
        ? "https://image.tmdb.org/t/p/w500/" + tv.poster_path
        : "https://image.tmdb.org/t/p/w500/" + tv.backdrop_path;
    },
  },
  mounted() {
    this.getFilm();
    this.getSeries();
    this.getFilm2();
  },
};
</script>