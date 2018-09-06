<template>
    <li>
      <div
        :class="{bold: isFolder}"
        @click="toggle">
        <span v-if="isFolder">Jornada {{matchDay}} [{{ open ? '-' : '+' }}]</span>
        <span v-if="!isFolder">{{model.HomeTeam.Team}}  </span>
        <input v-if="!isFolder" type="number" min="0" v-model.number="model.HomeScore">
        <span v-if="!isFolder"> - {{model.AwayTeam.Team}}  </span>
        <input v-if="!isFolder" type="number" min="0" v-model.number="model.AwayScore">
        <button v-if="!isFolder" @click="updateResult(model._id, model.HomeScore, model.AwayScore)">Submit</button>
      </div>
      <ul v-show="open" v-if="isFolder">
        <MatchDay
          class="item"
          v-if="isFolder"
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
        data: null
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
        if(self.tournamentID != null){
          const myRequest = new Request('https://scoretables-service.herokuapp.com/api/matchdays/league/'+self.tournamentID+'/'+self.matchDay)
          fetch(myRequest).then(response => response.json()).then(json => {
            console.log(json);
            self.data = {children: json}
          }).catch(error => {console.log(error);});
        }
      },
      updateResult: function (id, homescore, awayscore) {
        let self = this
        const myRequest = new Request('https://scoretables-service.herokuapp.com/api/matchdays/'+id+'/'+homescore+'/'+awayscore, {method: 'PUT'})
        fetch(myRequest).then(response => response.json()).then(json => {
          console.log(json);
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
        padding: 0 10px;
        overflow: hidden;
        background-color: #f1f1f1;
    }
    .bold {
        font-weight: bold;
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style: none;
    }
</style>
