<template lang="pug">
  #app
    pm-header
    router-view
    pm-footer
</template>

<script>
import PmFooter from "@/components/layout/Footer.vue";
import PmHeader from "@/components/layout/Header.vue";

export default {
  name: "app",

  components: { PmFooter, PmHeader },

  computed: {},
  watch: {},
  methods: {},
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
