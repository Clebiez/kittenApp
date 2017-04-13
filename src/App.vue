<template>
  <div id="app">
    <md-toolbar class="md-warn">
      <h2 class="md-title" style="flex: 1">KittenApp: Application de listing de chatons trop mignons</h2>
    </md-toolbar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right:0;
  overflow: hidden;
}
.md-title {
  color: white;
  text-align: center;
}
</style>
