<template lang="pug">
    .container
        content.has-text-centered
        slot(name="loader")
          h1 Loading...
</template>

<style lang="scss" scoped>
.content {
  padding: 20px;
  min-height: 40vh;
}
</style>