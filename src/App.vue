<template>
  <div id="app">
    <component :is="layout">
      <router-view :key="$route.path" />
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    spa: () => import('./layouts/spa')
    // HelloWorld: () => import('./components/HelloWorld.vue')
  },
  computed: {
    layout() {
      // if (this.$q.platform.is.mobile) return 'mobile'
      // else if (this.$q.platform.is.electron) return 'electron'
      // else return 'spa'
      return 'spa'
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
