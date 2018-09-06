<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div id="app">
    <ul v-for="i in MatchDayAmount">
      <MatchDay 
        :match-day=i
        :tournament-i-d=TournamentID
        :model="data">
      </MatchDay>
    </ul>
    <vue-table :columns="columns" :rows="rows"></vue-table>
  </div>
</template>

<script>



import HelloWorld from './components/HelloWorld.vue'
import MatchDay from './components/Schedule/MatchDay.vue'
import VueTable from '@lossendae/vue-table'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MatchDay,
    VueTable
  },
  data(){
    return {
        TournamentID: "",
        Title: "",
        MatchDayAmount: 0,
        Teams: null,
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
        ],
        data:{ 
            children: [
                {
                    "_id": "5aea10f2ea53bd0004830f6d",
                    "MatchDay": 1,
                    "HomeScore": 1,
                    "AwayScore": 0,
                    "HomeTeam": {
                        "ID": "Marvin",
                        "Team": "Chelsea",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/15.jpg"
                    },
                    "AwayTeam": {
                        "ID": "Pablo",
                        "Team": "Liverpool",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/12.jpg"
                    },
                    "UpdateDate": "2018-05-03T23:54:01.839Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f6e",
                    "MatchDay": 1,
                    "HomeScore": 0,
                    "AwayScore": 1,
                    "HomeTeam": {
                        "ID": "Sergio",
                        "Team": "Manchester City",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/08.jpg"
                    },
                    "AwayTeam": {
                        "ID": "Pablo",
                        "Team": "Liverpool",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/12.jpg"
                    },
                    "UpdateDate": "2018-05-09T04:32:54.824Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f6f",
                    "MatchDay": 1,
                    "HomeScore": 0,
                    "AwayScore": 1,
                    "HomeTeam": {
                        "ID": "Daniel",
                        "Team": "Real Madrid",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/liga-1div/03.jpg"
                    },
                    "AwayTeam": {
                        "ID": "Pablo",
                        "Team": "Liverpool",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/12.jpg"
                    },
                    "UpdateDate": "2018-09-05T17:26:16.114Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f70",
                    "MatchDay": 1,
                    "HomeScore": 0,
                    "AwayScore": 2,
                    "HomeTeam": {
                        "ID": "Ricardo",
                        "Team": "Monaco",
                        "ImageURL": "https://www.seeklogo.net/wp-content/uploads/2013/10/as-monaco-fc-current-vector-logo.png"
                    },
                    "AwayTeam": {
                        "ID": "Pablo",
                        "Team": "Liverpool",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/12.jpg"
                    },
                    "UpdateDate": "2018-05-04T00:24:57.913Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f71",
                    "MatchDay": 1,
                    "HomeScore": 1,
                    "AwayScore": 1,
                    "HomeTeam": {
                        "ID": "Sergio",
                        "Team": "Manchester City",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/08.jpg"
                    },
                    "AwayTeam": {
                        "ID": "Marvin",
                        "Team": "Chelsea",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/15.jpg"
                    },
                    "UpdateDate": "2018-05-04T00:54:56.730Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f72",
                    "MatchDay": 1,
                    "HomeScore": 2,
                    "AwayScore": 0,
                    "HomeTeam": {
                        "ID": "Daniel",
                        "Team": "Real Madrid",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/liga-1div/03.jpg"
                    },
                    "AwayTeam": {
                        "ID": "Marvin",
                        "Team": "Chelsea",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/15.jpg"
                    },
                    "UpdateDate": "2018-05-10T00:30:13.721Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f73",
                    "MatchDay": 1,
                    "HomeScore": 0,
                    "AwayScore": 1,
                    "HomeTeam": {
                        "ID": "Ricardo",
                        "Team": "Monaco",
                        "ImageURL": "https://www.seeklogo.net/wp-content/uploads/2013/10/as-monaco-fc-current-vector-logo.png"
                    },
                    "AwayTeam": {
                        "ID": "Marvin",
                        "Team": "Chelsea",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/15.jpg"
                    },
                    "UpdateDate": "2018-05-04T00:11:40.000Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f74",
                    "MatchDay": 1,
                    "HomeScore": 1,
                    "AwayScore": 1,
                    "HomeTeam": {
                        "ID": "Daniel",
                        "Team": "Real Madrid",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/liga-1div/03.jpg"
                    },
                    "AwayTeam": {
                        "ID": "Sergio",
                        "Team": "Manchester City",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/08.jpg"
                    },
                    "UpdateDate": "2018-07-13T15:15:21.381Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f75",
                    "MatchDay": 1,
                    "HomeScore": 1,
                    "AwayScore": 0,
                    "HomeTeam": {
                        "ID": "Ricardo",
                        "Team": "Monaco",
                        "ImageURL": "https://www.seeklogo.net/wp-content/uploads/2013/10/as-monaco-fc-current-vector-logo.png"
                    },
                    "AwayTeam": {
                        "ID": "Sergio",
                        "Team": "Manchester City",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/premier-league/08.jpg"
                    },
                    "UpdateDate": "2018-05-09T21:45:14.808Z",
                    "LeagueID": "ACLMayo"
                },
                {
                    "_id": "5aea10f2ea53bd0004830f76",
                    "MatchDay": 1,
                    "HomeScore": 0,
                    "AwayScore": 3,
                    "HomeTeam": {
                        "ID": "Ricardo",
                        "Team": "Monaco",
                        "ImageURL": "https://www.seeklogo.net/wp-content/uploads/2013/10/as-monaco-fc-current-vector-logo.png"
                    },
                    "AwayTeam": {
                        "ID": "Daniel",
                        "Team": "Real Madrid",
                        "ImageURL": "https://cdn.enjore.com/source/img/team/badge/s/liga-1div/03.jpg"
                    },
                    "UpdateDate": "2018-05-08T00:44:09.213Z",
                    "LeagueID": "ACLMayo"
                }
            ]}
    }
  },
  methods: {
      fetchLeague: function () {
          let self = this
          const myRequest = new Request('https://scoretables.herokuapp.com/api/leagues/ACLMayo')
          fetch(myRequest).then(response => response.json()).then(json => {
              console.log(json);
            self.TournamentID = json.ID;
            self.Title = json.Title;
            self.MatchDayAmount = json.MatchDayAmount;
            self.Teams = json.Teams
          }).catch(error => {console.log(error);});
      }
  },
  mounted() {
      this.fetchLeague()
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
