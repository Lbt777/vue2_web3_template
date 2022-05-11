<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background-color: #f6f7fb;
  position: relative;
  min-height: 100vh;
}
img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
