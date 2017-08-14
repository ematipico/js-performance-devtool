<template>
  <div class="j-table">
    <span class="header title">Marker name</span>
    <span class="header description">Time</span>
    <div v-for="marker in markers" :key="marker.id" class="j-row">
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'JTable',
  components: {
  },
  data() {
    return {
      markers: [
        {
          name: 'rigth',
          time: 224
        },
        {
          name: 'left',
          time: 224
        }
      ]
    }
  }
}
</script>

<style>
.j-table {
  display: grid;
  grid-template-rows: 75px auto;
  grid-template-columns: 20% auto;
  width: 100%;
  border: 1px solid #ccc;
}

.j-table .title {
  grid-column-start: 1;
  border-bottom: 1px solid #ccc;
}

.j-table .description {
  grid-column-start: 2;
  border-bottom: 1px solid #ccc;
}

.j-row {
  height: 25px;
  border: 1px dotted #ccc;
  grid-column: 1 / 3;
}
</style>
