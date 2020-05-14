<template lang="pug">
  #app
    pm-header

    pm-notifications(v-show="showNotifications")
      p(slot="body") Results not Found

    pm-loader(v-show="isLoading")
      h1(slot="loader") Loading from component father
    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              :track="t", 
              @select="setSelectedTrack",
              :class="{ 'is-active': t.id === selectedTrack }"  
            )

    pm-footer
</template>

<script>
import trackService from "@/services/track";
import PmFooter from "@/components/layout/Footer.vue";
import PmHeader from "@/components/layout/Header.vue";

import PmTrack from "@/components/Track.vue";

import PmLoader from "@/components/shared/Loader.vue";
import PmNotifications from "@/components/shared/Notifications.vue";

export default {
  name: "app",

  components: { PmFooter, PmHeader, PmTrack, PmLoader, PmNotifications },

  data() {
    return {
      searchQuery: "",
      tracks: [],

      isLoading: false,
      showNotifications: false,
      selectedTrack: ""
    };
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    showNotifications() {
      if (this.showNotifications) {
        setTimeout(() => {
          this.showNotifications = false;
        }, 3000);
      }
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }

      this.isLoading = true;

      trackService.search(this.searchQuery).then(res => {
        this.showNotifications = res.tracks.total === 0;
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
.is-active {
  border: 5px #23d160 solid;
}
</style>
