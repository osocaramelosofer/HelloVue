<template>
<div>

  <img alt="Vue logo" src="./assets/logo.png">
  
  <Counter v-bind:start="3" />
  <Counter :start="2" />

</div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  name: 'App',
  components: {
    Counter
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
