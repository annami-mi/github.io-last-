<template>
  <div
      class="groups">
    <button v-for="season in seasons" :key="season.id"
            class="link"
            :class="season.id === currentSeason ? 'link--active' : ''"
            @click="changeSeason(season.id)"
    > {{season.text}}</button>
  </div>
</template>

<script>
export default {
  name: "groupsSeason",
  data(){
    return{
      seasons:[
        { id: '0', text: 'All seasons'},
        { id: '1', text: '1 season'},
        { id: '2', text: '2 season'},
        { id: '3', text: '3 season'},
        { id: '4', text: '4 season'},
        { id: '5', text: '5 season'},
      ],
      currentSeason: null,
    }
  },
  methods:{
    changeSeason(season){
      this.currentSeason = season;
      this.$emit('changeSeason', this.currentSeason)
    }
  },
}
</script>

<style scoped>
.link{
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;

  font-size: 16px;
  color: #E3E3E3;
  margin-right: 16px;
  transition: 200ms;
}

.link--active,
.link:hover{
  color: #39C569;
}
</style>