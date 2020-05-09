<template lang="pug">
  #app
    img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg" class="img")
    h1 {{ msg }}
    #peor
      div.form-group
          label(for='name' class="label") Nombre:
          input#name.form-control(type='text', placeholder='Platzetiro' name='name')
      div.form-group
          label(for='name' class="label") Apellido:
          input#name.form-control(type='text', placeholder='Cool de la Web' name='name')
      div.form-group
          label(for='name' class="label") Cargo:
          input#name.form-control(type='text', placeholder='FullStack JS' name='name')
      button(class="send") ENVIAR

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Registro estación Platzi",
    };
  },
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

#peor {
  display: block;
  margin-left: 620px;
  margin-right: auto;
  width: 360px;
  text-align: left;
  color: #e7a545;
}

h1 {
  color: #00bfd6;
}

.img {
  width: 320px;
}

.label {
  font-size: 14px;
}

input {
  width: 350px;
  border: none;
  border-bottom: 2px solid #e7a545;
  font-size: 20px;
  padding: 5px;
}

.send {
  margin-top: 2vh;
  padding: 8px;
  float: right;
  font-size: 18px;
  width: 149px;
  background-color: #00bfd6;
  color: aliceblue;
  font-weight: bold;
}

input:focus,
input.form-control:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
