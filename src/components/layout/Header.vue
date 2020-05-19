<template lang="pug">
	section.hero.is-success
		.hero-head
			header.nav
				.container
					.nav-left
						.nav-item
							strong 📻 Platzi Music
					.nav-right.nav-menu
						a.nav-item(@click="selectLang('en')") 🦅
						a.nav-item(@click="selectLang('es')") 🇲🇽
						router-link.nav-item(:to="{name: 'search'}") {{ $t("search")}}
						router-link.nav-item(to="about") {{ $t("about")}}

		.hero-body
			.container.has-text-centered
				h1.title Platzi Music
				h2.subtitle Good songs
				pm-player
</template>

<script>
import PmPlayer from "@/components/Player.vue";

export default {
  components: { PmPlayer },
  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
