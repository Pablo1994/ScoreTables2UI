<template>
  <div id="app">
    <vue-table :columns="columns" :rows="rows"></vue-table>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueTable from '@lossendae/vue-table'

export default {
  name: 'app',
  components: {
    HelloWorld,
    VueTable
  },
  data() {
      return {
        // columns definition only requires a name to be displayed
        columns: [
          {
            name: "Team"
          },{
            name: "MP"
          },{
            name: "W"
          },{
            name: "D"
          },{
            name: "L"
          },{
            name: "F"
          },{
            name: "A"
          },{
            name: "diff"
          },{
            name: "PTS"
          }
        ],
        // result set
        rows: [
          {
            Team: "Liverpool",
            MP: "0",
            W: "0",
            D: "0",
            L: "0",
            F: "0",
            A: "0",
            diff: "0",
            PTS: "0"
          },{
            Team: "Chelsea",
            MP: "0",
            W: "0",
            D: "0",
            L: "0",
            F: "0",
            A: "0",
            diff: "0",
            PTS: "0"
          },{
            Team: "Real Mandril",
            MP: "0",
            W: "0",
            D: "0",
            L: "0",
            F: "0",
            A: "0",
            diff: "0",
            PTS: "0"
          }
        ]
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


body {
    padding: 50px;
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
    color: #00B7FF;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ccc;
}

th, td {
    text-align: left;
    padding: 8px;
}

th{
	text-transform: uppercase;
	background-color: #6ba229;
	color: #fff;
	height: 44;
}
</style>
