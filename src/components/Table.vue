<template>
    <vue-table :columns="columns" :rows="rows"></vue-table>
</template>

<script>
  export default {
    data() {
      return {
        // columns definition only requires a name to be displayed
        columns: [
          {
            name: "name"
          },{
            name: "nickname"
          },{
            name: "company"
          }
        ],
        // result set
        rows: [
          {
            name: "Robert Duvak",
            nickname: "jose26",
            company: "Apple Inc."
          },{
            name: "Isabelle Champion",
            nickname: "isa",
            company: "EDF"
          },{
            name: "Alberto Tulador",
            nickname: "beber",
            company: "Matla"
          }
        ]
      }
    }
  }
</script>
