<template>
    <li>
      <div
        :class="{bold: isFolder}"
        @click="toggle">
        <span v-if="isFolder">Jornada {{matchDay}} [{{ open ? '-' : '+' }}]</span>
        <span v-if="!isFolder">{{data.HomeTeam.Team}}  </span>
        <input v-if="!isFolder" type="number" v-model.number="data.HomeScore">
        <span v-if="!isFolder"> - {{data.AwayTeam.Team}}  </span>
        <input v-if="!isFolder" type="number" v-model.number="data.AwayScore">
        <button v-if="!isFolder">Submit</button>
      </div>
      <ul v-show="open" v-if="isFolder">
        <MatchDay
          class="item"
          v-for="(data, index) in data.children"
          :key="index"
          :model="data">

        </MatchDay>
      </ul>
    </li>
</template>

<script>
export default {
    name: 'MatchDay',
    props: {
      matchDay: Number,
      tournamentID: String,
      model: Object
    },
    data: function () {
      return {
        open: false,
        data: {children: {}}
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children &&
          this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      fetchMatchDay: function () {
        let self = this
          const myRequest = new Request('https://scoretables.herokuapp.com/api/matchdays/'+self.tournamentID+'/'+self.matchDay)
          fetch(myRequest).then(response => response.json()).then(json => {
            console.log(json);
            self.data.children = json
          }).catch(error => {console.log(error);});
      }
    },
    mounted () {
      this.fetchMatchDay()
    }
}
</script>

<style>
    body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
    }
    .item {
        cursor: pointer;
    }
    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
    }
</style>
