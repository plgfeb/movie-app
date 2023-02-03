<template>
  <div v-if="!searchResult || (searchResult && !searchResult.length)">
    <div class="serie">
      <h1>
        <h3><Indietro></Indietro></h3>
        Immergiti nelle tue serie TV preferite
      </h1>
    </div>
    <div>
      <div class="flex flex-row flex-wrap">
        <div class="basis-1/4 p-2" v-for="tv in tvs" :key="tv.id">
          <router-link
            class="text-blue-50 hover:bg-slate-100 hover:text-red-300"
            id="image"
            :to="`/serie/dettagli/${tv.id}`"
          >
            <img :src="getPosterPath(tv)" class="h-48 w-96 object-cover" />
            <h1 class="text-xl font-semibold">
              {{ tv.name }}
            </h1>
          </router-link>
        </div>
      </div>
      <div>
        <h3>
          <button @click="loadElements">
            <!--QUESTO DOVREBBE RICHIAMARE IL METODO PER LA FATCH-->
            <font-awesome-icon icon="fa-solid fa-circle-down" />
          </button>
        </h3>
        <div v-for="tv in tvs" :key="tv.id">
          {{ tv.title }}
        </div>
      </div>
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
              {{ item.name }}
            </h1>
          </router-link>
        </div>
        </div>
      </div> 
  </div>
</template>

<script>
import Indietro from "../components/Indietro.vue";
export default {
  data() {
    return {
      tvs: [],
      page: 0,
      searchResult: [],
      search: "",
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
        if (value && !Object.hasOwn(value, "search")) {
          this.searchResult = [];
          this.loadElements();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    searchFilms() {
      return fetch(
        "https://api.themoviedb.org/3/search/tv?query=" +
          this.search +
          "&api_key=6f9286d54de4891ea7a5c91779e09786&page=1"
      )
        .then((res) => res.json())
        .then((posts) => {
          this.searchResult = posts.results;
        });
    },
    async loadElements() {
      this.page++;
      await fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=6f9286d54de4891ea7a5c91779e09786&language=en-US&page=" +
          this.page
      )
        .then((res) => res.json())
        .then((data) => {
          data.results.forEach((element) => {
            this.tvs.push(element);
          });
        });
    },

    getPosterPath(tv) {
      return tv.backdrop_path === null
        ? "https://image.tmdb.org/t/p/w500/" + tv.poster_path
        : "https://image.tmdb.org/t/p/w500/" + tv.backdrop_path;
    },
  },
  mounted() {
    this.loadElements();
  },
  components: { Indietro },
};
</script>
