<template>
  <div>
    <nav class="px-4 py-2 flex justify-between">
      <div class="">
        <router-link
          id="logo"
          :to="{ name: 'Home' }"
          class="
            rounded-lg
            px-3
            py-2
            text-blue-50
            font-medium
            hover:text-red-900
          "
        >
          <font-awesome-icon icon="fa-solid fa-house" />
        </router-link>

        <input
          @keyup.enter="search"
          class="text-neutral-800"
          type="text"
          v-model="searchId"
          style="border-radius: 7px"
        />
        <button
          class="
            rounded-lg
            px-3
            py-2
            text-slate-50
            font-medium
            hover:text-red-900
          "
          @click="search"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>

        <router-link
          id="logo"
          :to="{ name: 'TopRated' }"
          class="
            rounded-lg
            px-3
            py-2
            text-blue-50
            font-medium
            hover:text-red-900
          "
        >
          <font-awesome-icon icon="fa-solid fa-star" />
        </router-link>
      </div>
      <div class="">
        <router-link
          to="/login"
          class="
            rounded-lg
            px-3
            py-2
            text-blue-50
            font-medium
            hover:text-red-900
          "
        >
          <font-awesome-icon icon="fa-solid fa-user" />
        </router-link>
      </div>
    </nav>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchId: "",
      searchResult: {},
    };
  },
  watch: {
    searchId: {
      handler: function (value) {
        if (value === "") {
          const currentRoute = this.$router.currentRoute._value.path;
          this.$router.replace({ path: currentRoute });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async search() {
      const currentRoute = this.$router.currentRoute._value.path;
      this.$router.replace({
        path: currentRoute,
        query: { search: this.searchId },
      });
    },
  },
};
</script>


