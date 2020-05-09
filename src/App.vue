<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ firstname }}
      input(v-model="name")
      p {{ name }}
      br
      a(:href="url" target="_blank") Click me 
      br
      br
    h1 {{ lastname}}
      input(v-model="lastName")
      p {{ lastName }}
      br
    h1 {{ msg }}
      input(v-model="currentAge")
      br
      br
    h1 {{ msg2 }}
      input(v-model="dob")
      br
      span(class="span") {{ calculateActualAge }}
      br
      br
    input(v-model="name1")
    br
    br
    button(@click="format") Format name
    p {{ formmattedName}}

      

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstname: "Firts Name",
      lastname: "Last Name",
      name: "",
      lastName: "",
      url: "https://www.google.com",
      dob: "",
      currentAge: "",
      msg: "Type the year you born",
      msg2: "Type the current Year",
      formmattedName: "",
      name1: ""
    };
  },
  components: {},
  whatch: {
    dob(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  methods: {
    format() {
      this.formmattedName = this.name1
        .split(" ")
        .join("-")
        .toUpperCase();
    }
    // showFullName() {
    //   console.log(`${this.name} ${this.lastName}`);
    // },
  },
  computed: {
    showFullName() {
      return `${this.name} ${this.lastName}`;
    },
    calculateActualAge() {
      return this.dob - this.currentAge;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.button {
  background-color: brown;
}
.span {
  background: chocolate;
}
.name {
  background-color: coral;
}
</style>
