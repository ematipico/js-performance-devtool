<template>
  <div class="js-perf">
    <h1>JS Performance</h1>
    <JTable />
  </div>
</template>

<script>
import JTable from './Table'
export default {
  name: 'App',
  components: {
    JTable
  }
}
</script>

<style scoped>
.js-perf {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
