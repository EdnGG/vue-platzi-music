<template lang="pug">
  #app
    pm-header  
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text", 
            placeholder="searching songs"
            v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times
      .container
        p 
          small {{ searchMessage }}
      
      .container.results
        .columns
          .column(v-for="t in tracks") 
            | {{ t.name }} - {{ t.artists[0].name }}
    pm-footer
</template>

<script>
import trackService from "./services/track";
import PmFooter from "./components/layout/Footer.vue"; // Forma global
import PmHeader from "./components/layout/Header.vue"; // Forma global

export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },
  components: {
    PmFooter,
    PmHeader
  },
  whatch: {},
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      trackService.search(this.searchQuery).then(res => {
        this.tracks = res.tracks.items;
        //console.log(res);
      });
    }
  },
  computed: {
    searchMessage() {
      return `Found: ${this.tracks.length}`;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
  margin-top: 100px;
  display: flex;
}
</style>
