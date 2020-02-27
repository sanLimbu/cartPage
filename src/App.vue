<template>
  <div id="app">
    <sum></sum>
    <top-header></top-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sum from './components/Sum'
import TopHeader from './components/common/TopHeader'

export default {
  name: 'App',
  components: {
    Sum,
    TopHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
